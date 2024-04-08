import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoriesDocument = HydratedDocument<Categories>;

@Schema()
export class Categories {
  @Prop()
  id: number;

  @Prop()
  link: string;

  @Prop()
  name: string;

  @Prop()
  imgUrl: string;

  @Prop()
  shadowColor: string;

  @Prop()
  translate: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
