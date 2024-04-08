import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SlidersDocument = HydratedDocument<Sliders>;

@Schema()
export class Sliders {
  @Prop()
  id: number;

  @Prop()
  link: string;

  @Prop()
  imgUrl: string;

  @Prop()
  altName: string;
}

export const SlidersSchema = SchemaFactory.createForClass(Sliders);
