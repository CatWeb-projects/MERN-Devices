import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RevalidateUserDto {
  @ApiProperty({
    example: ''
  })
  @IsString()
  @IsNotEmpty()
  readonly refreshToken: string;
}
