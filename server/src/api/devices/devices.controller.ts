import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { addDevicesResponse, getDeviceInfoResponse } from './api-response';

@ApiTags('Devices')
@Controller('/devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @HttpCode(200)
  @ApiResponse(addDevicesResponse)
  @ApiQuery({ name: 'type', required: false, type: String })
  @ApiQuery({ name: 'manufacturer', required: false, type: String })
  @Get()
  getAllDevices(@Query('type') type: string) {
    return this.devicesService.getAllDevices(type);
  }

  @HttpCode(200)
  @ApiResponse(getDeviceInfoResponse)
  @Get(':link')
  getDevice(@Param('link') link: string) {
    return this.devicesService.getDevice(link);
  }

  @Get('search/:query')
  search(@Query('query') query: string) {
    return this.devicesService.search(query);
  }
}
