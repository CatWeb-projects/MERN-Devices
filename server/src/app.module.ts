import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  CategoriesController,
  SliderImagesController,
  TagsController,
} from './routes';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    TagsController,
    SliderImagesController,
  ],
  providers: [AppService],
})
export class AppModule {}
