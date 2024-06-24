import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnprocessableEntityException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { AddToFavoritesDto, AuthUserDto, UserDto } from './dto';
import { Users, UsersDocument } from './schemas/users.schema';
import { Devices, DevicesDocument } from '../devices/schemas/devices.schema';

const errorMessage = {
  userExists: 'user already exist, please login',
  minimumLength: 'minimum length is 6 characters',
  missingPassword: 'password can not be null',
  emailUnique: 'email must be unique for user',
  invalidCredentials: 'Invalid username or password',
  forbidden: 'forbidden',
  invalidEmail: 'User with this email not found',
  invalidPassword: 'Password does not match',
  invalidToken: 'Invalid token'
};

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private users: Model<UsersDocument>,
    private jwtService: JwtService,
    @InjectModel(Devices.name)
    private devicesModel: Model<DevicesDocument>
  ) {}

  getAllUsers = async () => {
    const users = await this.users.find();
    return users;
  };

  getUserByEmail = async (email: string) => {
    const user = await this.users.findOne({ email });
    return user;
  };

  //Register User
  createUser = async (userDto: UserDto) => {
    const { email, password } = userDto;
    if (email) {
      const emailUser = await this.users.findOne({ email });

      if (emailUser) {
        throw new UnprocessableEntityException({ error: errorMessage.emailUnique });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const token = await this.jwtService.signAsync(
      { email },
      {
        expiresIn: '1h'
        // secret: this._configService.get('JWT_SECRET'),
      }
    );
    const user = await this.users.create({
      ...userDto,
      created_at: new Date(),
      password: hashedPassword
    });

    return {
      user,
      refreshToken: token
    };
  };

  //Login User
  login = async (authUserDto: AuthUserDto) => {
    const { email, password } = authUserDto;
    const user = await this.users.findOne({ email });
    if (!user) {
      throw new BadRequestException(errorMessage.invalidEmail);
    }

    const checkPassMatch = await bcrypt.compare(password, user.password);
    if (!checkPassMatch) {
      throw new ForbiddenException(errorMessage.invalidPassword);
    }

    const tokens = await this.issueTokens(user.id);
    user.password = undefined;
    return {
      user,
      ...tokens
    };
  };

  //Validate user
  async validateSession(tokenData: { refreshToken: string }) {
    const token = await this.jwtService.verify(tokenData.refreshToken);
    const user = await this.users.findOne(token.id ? { _id: token.id } : { email: token.email });

    if (!user && !token) {
      throw new ForbiddenException(errorMessage.invalidToken);
    }

    const profileUser = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user._id,
      role: user.role,
      isLoggedIn: true,
      favorites: user.favorites
    };

    return profileUser;
  }

  //Delete User
  deleteUser = async (id: string) => {
    const user = await this.users.findByIdAndDelete(id);
    return user;
  };

  //Add to favorites
  addToFavorites = async (id: AddToFavoritesDto) => {
    const userId = '6652075d7ed348825f77dd9e';
    const user = await this.users.findOne({ _id: userId });
    const device = await this.devicesModel.findOne(id);

    const checkAddToFavorites = () => {
      if (user?.favorites?.data) {
        if (user.favorites.data.find((favorite) => favorite.id === device.id)) {
          const filteredFavorites = user.favorites.data.filter(
            (favorite) => favorite.id !== device.id
          );
          return filteredFavorites;
        } else {
          return [...user?.favorites?.data, device];
        }
      }
    };

    await this.users.updateOne(
      { _id: userId },
      {
        favorites: {
          limit: 8,
          page: 1,
          totalCount: 1,
          totalPages: 1,
          data: checkAddToFavorites()
        }
      }
    );
    return device;
  };

  private issueTokens(userId: string) {
    const data = { id: userId };

    const accessToken = this.jwtService.sign(data, {
      expiresIn: '1h'
    });

    const refreshToken = this.jwtService.sign(data, {
      expiresIn: '7d'
    });

    return { accessToken, refreshToken };
  }
}
