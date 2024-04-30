import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CollectionService } from "./collection.service";
import { CollectionController } from "./collection.controller";
import { Collection, CollectionSchema } from "./schemas/collection.schema";

@Module({
  controllers: [CollectionController],
  providers: [CollectionService],
  imports: [
    MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema}])
  ]
})
export class CollectionModule {}