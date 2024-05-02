import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import bcrypt from 'bcrypt'
import { CreateUserDto } from "./dto";
import { Users, UsersDocument } from "./schemas/users.schema";

const errorMessage = {
  userExists: 'user already exist, please login',
  minimumLength: 'minimum length is 6 characters',
  missingPassword: 'password can not be null',
  emailUnique: 'email must be unique for user',
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private users: Model<UsersDocument>,
    private jwtService: JwtService
  ) {}

  createUser = async (createUserDto: CreateUserDto) => {
    const { first_name, last_name, email, encrypted_password, role } = createUserDto;
    if (email) {
      const emailUser = await this.users.findOne({ email });

      if (emailUser) {
        throw new UnprocessableEntityException({ error: errorMessage.emailUnique });
      }
    }

    const hashedPassword = await bcrypt.hash(encrypted_password, 10);
    const token = await this.jwtService.signAsync({ id: email }, {
      expiresIn: '1h',
      // secret: this._configService.get('JWT_SECRET'),
    });
    const user = await this.users.create({
      created_at: new Date(),
      first_name,
      last_name,
      email,
      encrypted_password: hashedPassword,
      role,
      token
    });
    
    return user;
  }
}