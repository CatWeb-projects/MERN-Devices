import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sliders, SlidersDocument } from './schemas/sliders.schema';

@Injectable()
export class SlidersService {
  constructor(
    @InjectModel(Sliders.name)
    private slidersModel: Model<SlidersDocument>,
  ) {}

  getAllSliders = async (): Promise<Sliders[]> => {
    const sliders = (await this.slidersModel.find({}, { _id: 0 }).exec()).sort(
      (a, b) => a.id - b.id,
    );
    return sliders;
  };
}
