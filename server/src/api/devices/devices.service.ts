import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Devices, DevicesDocument } from './schemas/devices.schema';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Devices.name)
    private devicesModel: Model<DevicesDocument>
  ) {}
  getAllDevices = async (category: string, sort: string): Promise<Devices[]> => {
    const manufacturer = 'Apple';
    const checkDeviceType = () => {
      if (category === 'apple') {
        return { manufacturer };
      } else if (category) {
        return { category };
      } else {
        return {};
      }
    };

    const devices = await this.devicesModel
      .find(checkDeviceType(), { _id: 0 })
      .sort(sort ? { [`${sort}`]: -1 } : 'id');
    return devices;
  };

  getDevice = async (link: string) => {
    const device = await this.devicesModel.findOne({ link }, { _id: 0 });
    return device;
  };

  search = async (name: string) => {
    const searchDevices = await this.devicesModel.find({ name: new RegExp(name, 'i') }, { _id: 0 });
    return searchDevices;
  };
}
