import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CollectionService } from './collection.service';
import { collectionResponse } from './api-response/get-collection.response';

@ApiTags('Collection')
@Controller('/collection')
export class CollectionController {
  constructor(private collection: CollectionService) {}

  @HttpCode(200)
  @ApiResponse(collectionResponse)
  @Get()
  getAllCollection() {
    return this.collection.getAllCollection();
  }
}
