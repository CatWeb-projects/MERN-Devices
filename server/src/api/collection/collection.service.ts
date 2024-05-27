import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Collection, CollectionDocument } from "./schemas/collection.schema";



@Injectable()
export class CollectionService {
  constructor( @InjectModel(Collection.name)
  private collectionModel: Model<CollectionDocument>
) {}

  getAllCollection = async () => {
    const collection = this.collectionModel.find({}, { _id: 0 }).sort('id');
    return collection;
  }
}