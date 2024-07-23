import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiTags
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthUserDto, RevalidateUserDto } from './dto';
import { badUserResponse, okAuthResponse, okUserResponse, okUsersResponse } from './api-response';
import { Auth } from './decorators/auth.decorator';
import { CurrentUser } from './decorators/user.decorator';
import { okAddToFavoritesResponse } from './api-response/add-to-favorites-response';

@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(private users: UsersService) {}

  @HttpCode(200)
  @ApiOkResponse(okUsersResponse)
  @Get()
  getAllUsers() {
    return this.users.getAllUsers();
  }

  @HttpCode(200)
  @ApiOkResponse(okUserResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.users.getUserByEmail(email);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @ApiOkResponse(okUserResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Post('/auth/registration')
  createUser(@Body() userDto: AuthUserDto) {
    return this.users.createUser(userDto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @ApiOkResponse(okAuthResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Post('/auth/login')
  login(@Body() authUserDto: AuthUserDto) {
    return this.users.login(authUserDto);
  }

  @HttpCode(200)
  @ApiOkResponse(okAuthResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Post('/auth/validate-user')
  validateSession(@Body() tokenData: RevalidateUserDto) {
    return this.users.validateSession(tokenData);
  }

  @HttpCode(200)
  @ApiOkResponse(okAuthResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.users.deleteUser(id);
  }

  @Auth()
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOkResponse(okAddToFavoritesResponse)
  // @ApiBadRequestResponse(badUserResponse)
  @Post('/favorites/:id')
  addToFavorites(@Param('id') deviceId: string, @CurrentUser('_id') userId: string) {
    return this.users.addToFavorites(deviceId, userId);
  }

  @Auth()
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOkResponse(okAddToFavoritesResponse)
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: '1'
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: '8'
  })
  @Get('/favorites/all')
  getUserFavorites(
    @Query('limit') limit: number,
    @Query('page') page: number,
    @CurrentUser('_id') userId: string
  ) {
    return this.users.getUserFavorites(page, limit, userId);
  }
}
