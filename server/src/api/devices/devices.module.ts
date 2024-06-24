import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Devices, DevicesSchema } from './schemas/devices.schema';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports: [MongooseModule.forFeature([{ name: Devices.name, schema: DevicesSchema }])],
  exports: [DevicesService, MongooseModule]
})
export class DevicesModule {}
