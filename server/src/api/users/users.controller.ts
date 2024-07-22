import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AddToFavoritesDto, AuthUserDto, RevalidateUserDto, UserDto } from './dto';
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
  @Post('/favorites')
  addToFavorites(@Body() deviceDto: AddToFavoritesDto, @CurrentUser('_id') userId: string) {
    return this.users.addToFavorites(deviceDto, userId);
  }
}
