import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { getCategoriesResponse } from './api-response';

@ApiTags('Categories')
@Controller('/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @HttpCode(200)
  @ApiResponse(getCategoriesResponse)
  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }
}
