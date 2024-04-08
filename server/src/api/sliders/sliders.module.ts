import { Module } from '@nestjs/common';
import { SlidersController } from './sliders.controller';
import { SlidersService } from './sliders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sliders, SlidersSchema } from './schemas/sliders.schema';

@Module({
  controllers: [SlidersController],
  providers: [SlidersService],
  imports: [
    MongooseModule.forFeature([{ name: Sliders.name, schema: SlidersSchema }]),
  ],
})
export class SlidersModule {}
