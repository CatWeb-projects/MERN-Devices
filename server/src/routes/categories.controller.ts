import { Controller, Get } from '@nestjs/common';
import { categoriesData } from 'src/data/categories';
import { CategoriesData } from 'src/types';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll(): CategoriesData[] {
    return categoriesData;
  }
}
