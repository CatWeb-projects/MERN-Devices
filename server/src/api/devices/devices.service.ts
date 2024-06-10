import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Devices, DevicesDocument } from './schemas/devices.schema';
import { getPageNumber, getTotalPages } from '../../utils/utils';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Devices.name)
    private devicesModel: Model<DevicesDocument>
  ) {}
  getAllDevices = async (
    category: string,
    sort: string,
    limit: number = 8,
    page: number
  ): Promise<any> => {
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

    const devicesBeforeLimit = await this.devicesModel.find(checkDeviceType(), { _id: 0 });

    const devices = await this.devicesModel
      .find(checkDeviceType(), { _id: 0 })
      .sort(sort ? { [`${sort}`]: -1 } : 'id')
      .skip((page - 1) * limit)
      .limit(limit);

    return {
      limit: Number(limit),
      page: getPageNumber(page),
      totalCount: devicesBeforeLimit.length,
      totalPages: getTotalPages(devicesBeforeLimit.length, limit),
      data: devices
    };
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
