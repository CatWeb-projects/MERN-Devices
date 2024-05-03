import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { AuthUserDto, CreateUserDto } from "./dto";
import { okUserResponse } from "./api-response/user-ok.response";
import { badUserResponse } from "./api-response/user-bad-request.response";

@ApiTags('Users')
@Controller('/users')
export class UsersController {
 constructor(private users: UsersService) {}

  @HttpCode(200)
  @Get()
  getAllUsers() {
    return this.users.getAllUsers();
  }

  @HttpCode(200)
  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.users.getUserByEmail(email);
  }

  @HttpCode(200)
  @ApiOkResponse(okUserResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Post('/registration')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.users.createUser(createUserDto)
  }

  @HttpCode(200)
  // @ApiOkResponse(okUserResponse)
  // @ApiBadRequestResponse(badUserResponse)
  @Post('/login')
  login(@Body() authUserDto: AuthUserDto) {
    return this.users.login(authUserDto)
  }

  @HttpCode(200)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.users.deleteUser(id)
  }
}