import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema()
export class Collection {
  @Prop()
  id: number;

  @Prop()
  link: string;

  @Prop()
  name: string;

  @Prop()
  imgUrl: string;

  @Prop()
  translate: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
