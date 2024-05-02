import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto";
import { okUserResponse } from "./api-response/user-ok.response";
import { badUserResponse } from "./api-response/user-bad-request.response";

@ApiTags('Users')
@Controller('/users')
export class UsersController {
 constructor(private users: UsersService) {}

  @HttpCode(200)
  @ApiOkResponse(okUserResponse)
  @ApiBadRequestResponse(badUserResponse)
  @Post()
  createUser(@Body() createUserDto: CreateUserDto,) {
    return this.users.createUser(createUserDto)
  }
}