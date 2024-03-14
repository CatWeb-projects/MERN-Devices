import { Controller, Get } from '@nestjs/common';
import { sliderImagesData } from '../data/sliderImagesData';

@Controller('/slider')
export class SliderImagesController {
  @Get()
  findAll(): any {
    return sliderImagesData;
  }
}
