import { Controller, Get } from '@nestjs/common';
import { sliderData } from '../data/sliderData';
import { SliderData } from '../types/sliderData.types';

@Controller('/slider')
export class SliderImagesController {
  @Get()
  findAll(): SliderData[] {
    return sliderData;
  }
}
