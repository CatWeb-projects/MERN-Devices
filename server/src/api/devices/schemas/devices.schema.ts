import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DevicesDocument = HydratedDocument<Devices>;

@Schema()
export class DevicesPagination {
  @Prop()
  limit: number;

  @Prop()
  page: number;

  @Prop()
  totalCount: number;

  @Prop()
  totalPages: number;

  @Prop()
  data: Devices[];
}

@Schema()
export class Devices {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  credit: number;

  @Prop()
  cashback: number;

  @Prop()
  link: string;

  @Prop()
  imageUrl: string;

  @Prop()
  color: string;

  @Prop()
  model: string;

  @Prop()
  weight: number;

  @Prop()
  popularity: number;

  @Prop()
  manufacturer: string;

  @Prop()
  type: string;

  @Prop()
  colors: string[];

  @Prop()
  memoryOptions: number[];

  @Prop()
  camera: number;

  @Prop()
  frontCamera: number;

  @Prop()
  chipset: string;

  @Prop()
  chipsetFrequency: string;

  @Prop()
  processor: string;

  @Prop()
  cores: number;

  @Prop()
  videoCard: string;

  @Prop()
  videoCardMemory: number;

  @Prop()
  resolution: string;

  @Prop()
  display: string;

  @Prop()
  displayType: string;

  @Prop()
  hardDrive: number;

  @Prop()
  memory: number;

  @Prop()
  segment: string;
}

export const DevicesSchema = SchemaFactory.createForClass(Devices);
