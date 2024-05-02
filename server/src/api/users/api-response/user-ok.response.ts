import { ApiResponseOptions } from '@nestjs/swagger';

export const okUserResponse: ApiResponseOptions = {
  schema: {
    example: {
      first_name: 'Theodore',
      last_name: 'Goldman',
      email: 'example@gmail.com',
      token: 'token',
      role: 'admin',
      create_at: 'Thu May 02 2024 18:35:03 GMT+0300'
    }
  }
}