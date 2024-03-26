import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { CategoriesController, SliderImagesController } from './routes';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // added ../ to get one folder back
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
    }),
  ],
  controllers: [CategoriesController, SliderImagesController],
  providers: [],
})
export class AppModule {}
