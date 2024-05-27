import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { getDeviceInfoResponse, getDevicesResponse } from './api-response';

@ApiTags('Devices')
@Controller('/devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @HttpCode(200)
  @ApiResponse(getDevicesResponse)
  @ApiQuery({
    name: 'category',
    required: false,
    type: String,
    example: 'smartphones'
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    type: String,
    example: 'popularity'
  })
  // @ApiQuery({ name: 'manufacturer', required: false, type: String })
  @Get()
  getAllDevices(@Query('category') category: string, @Query('sort') sort: string) {
    return this.devicesService.getAllDevices(category, sort);
  }

  @HttpCode(200)
  @ApiResponse(getDeviceInfoResponse)
  @ApiParam({ name: 'link', example: 'xiaomi-oclean-f1-light-blue' })
  @Get(':link')
  getDevice(@Param('link') link: string) {
    return this.devicesService.getDevice(link);
  }

  @HttpCode(200)
  @ApiResponse(getDeviceInfoResponse)
  @ApiParam({
    name: 'name',
    required: false,
    type: String,
    example: 'iphone'
  })
  @Get('search/:name')
  search(@Param('name') name: string) {
    return this.devicesService.search(name);
  }
}
