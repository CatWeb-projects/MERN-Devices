import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'Theodore',
  })
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @ApiProperty({
    example: 'Lightman',
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
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  // @IsStrongPassword({
  //   minLength: 8,
  //   minLowercase: 1,
  //   minNumbers: 1,
  //   minSymbols: 1,
  //   minUppercase: 1
  // })
  readonly password: string;

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