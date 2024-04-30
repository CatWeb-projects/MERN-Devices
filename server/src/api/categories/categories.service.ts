import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories, CategoriesDocument } from './schemas/categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private categoriesModel: Model<CategoriesDocument>,
  ) {}

  getAllCategories = async (): Promise<Categories[]> => {
    const categories = (
      await this.categoriesModel.find({}, { _id: 0 }).exec()
    ).sort((a, b) => a.id - b.id);
    return categories;
  };
}
