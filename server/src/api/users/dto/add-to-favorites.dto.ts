import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddToFavoritesDto {
  @ApiProperty({
    example: 5
  })
  @IsNotEmpty()
  readonly id: number;
}
