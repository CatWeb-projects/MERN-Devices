import { BadRequestException, ForbiddenException, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import bcrypt from 'bcrypt'
import { AuthUserDto, UserDto } from "./dto";
import { Users, UsersDocument } from "./schemas/users.schema";

const errorMessage = {
  userExists: 'user already exist, please login',
  minimumLength: 'minimum length is 6 characters',
  missingPassword: 'password can not be null',
  emailUnique: 'email must be unique for user',
  invalidCredentials: 'Invalid username or password',
  forbidden: 'forbidden',
  invalidEmail: 'User with this email not found',
  invalidPassword: 'Password does not match'
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private users: Model<UsersDocument>,
    private jwtService: JwtService
  ) {}

  getAllUsers = async () => {
    const users = await this.users.find();
    return users;
  }

  getUserByEmail = async (email: string) => {
    const user = await this.users.findOne({ email });
    return user;
  }

  //Register User
  createUser = async (userDto: UserDto) => {
    const { first_name, last_name, email, password, role } = userDto;
    if (email) {
      const emailUser = await this.users.findOne({ email });

      if (emailUser) {
        throw new UnprocessableEntityException({ error: errorMessage.emailUnique });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = await this.jwtService.signAsync({ id: email }, {
      expiresIn: '1h',
      // secret: this._configService.get('JWT_SECRET'),
    });
    const user = await this.users.create({
      created_at: new Date(),
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
      token
    });
    
    return user;
  }

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

    const tokens = await this.issueTokens(user.id)
    user.password = undefined;
    return {
			user,
			...tokens
		};
  }

  async validateSession(tokenData: { refreshToken: string }) {
    const token = await this.jwtService.verify(tokenData.refreshToken);
    const user = await this.users.findOne({ _id: token.id });
    const profileUser = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user._id,
      role: user.role,
      isLoggedIn: true
    }

    return profileUser;
  }


  //Delete User
  deleteUser = async (id: string) => {
    const user = await this.users.findByIdAndDelete(id);
    return user;
  }

  private issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwtService.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwtService.sign(data, {
			expiresIn: '7d'
		})

		return { accessToken, refreshToken }
	}
}