import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { addDevicesResponse } from './api-response';

@ApiTags('Devices')
@Controller('/devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @HttpCode(200)
  @ApiResponse(addDevicesResponse)
  @Get()
  getAll(@Query('type') type: string) {
    return this.devicesService.getAll(type);
  }
}
