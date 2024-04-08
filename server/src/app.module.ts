import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { CategoriesModule, DevicesModule, SlidersModule } from './api';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/api/',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:14595@devices.oy68wq2.mongodb.net/technoheart?retryWrites=true&w=majority&appName=Devices',
    ),
    CategoriesModule,
    SlidersModule,
    DevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
