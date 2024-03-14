import { Controller, Get } from '@nestjs/common';
import { sliderImagesData } from 'src/data/sliderImagesData';

@Controller('/slider')
export class SliderImagesController {
  @Get()
  findAll(): any {
    return sliderImagesData;
  }
}
