import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Devices, DevicesDocument } from './schemas/devices.schema';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Devices.name)
    private devicesModel: Model<DevicesDocument>,
  ) {}
  getAll = async (type: string): Promise<Devices[]> => {
    const manufacturer = 'Apple';
    const checkDeviceType = () => {
      if (type === 'apple') {
        return { manufacturer };
      } else if (type) {
        return { type };
      } else {
        return {};
      }
    };

    const devices = await this.devicesModel
      .find(checkDeviceType(), { _id: 0 })
      .sort('id');
    return devices;
  };
}
