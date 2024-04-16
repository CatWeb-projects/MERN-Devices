import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { addDevicesResponse } from './api-response';

@ApiTags('Devices')
@Controller('/devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @HttpCode(200)
  @ApiResponse(addDevicesResponse)
  @ApiQuery({ name: 'type', required: false, type: String })
  @Get()
  getAll(@Query('type') type: string) {
    return this.devicesService.getAll(type);
  }
}
