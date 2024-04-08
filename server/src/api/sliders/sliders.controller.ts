import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SlidersService } from './sliders.service';
import { addSlidersResponse } from './api-response';

@ApiTags('Sliders')
@Controller('/sliders')
export class SlidersController {
  constructor(private slidersService: SlidersService) {}

  @HttpCode(200)
  @ApiResponse(addSlidersResponse)
  @Get()
  getAll() {
    return this.slidersService.getAll();
  }
}
