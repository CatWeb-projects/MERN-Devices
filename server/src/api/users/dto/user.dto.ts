import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Theodore',
  })
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @ApiProperty({
    example: 'Goldman',
  })
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty({
    example: 'example@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: 'my-password',
  })
  @IsString()
  @IsNotEmpty()
  @Length(4, 16, {message: 'Characters min 4, max 16'})
  readonly encrypted_password: string;

  @ApiProperty({
    example: 'user',
  })
  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @IsString()
  @IsNotEmpty()
  readonly created_at: string;

  @IsString()
  @IsNotEmpty()
  readonly token: string;
}