import { Controller, Get } from '@nestjs/common';
import { tagsData } from '../data/tagsData';

@Controller('tags')
export class TagsController {
  @Get()
  findAll(): any {
    return tagsData;
  }
}
