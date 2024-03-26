import { Controller, Get } from '@nestjs/common';
import { categoriesData } from '../../data/categories';
import { CategoriesData } from '../../types';

@Controller('/categories')
export class CategoriesController {
  @Get()
  findAll(): CategoriesData[] {
    return categoriesData;
  }
}
