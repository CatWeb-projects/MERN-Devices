import { ApiResponseOptions } from '@nestjs/swagger';

export const okAuthResponse: ApiResponseOptions = {
  schema: {
    example: {
      user: {
        _id: "664b51c5b444d329b3be7468",
        first_name: "Theodore",
        last_name: "Uzun",
        email: "uzuntudor@gmail.com",
        role: "admin",
        created_at: "Mon May 20 2024 16:36:05 GMT+0300 (Ora de vară a Europei de Est)"
      },
      accessToken: "accessToken",
      refreshToken: "refreshToken"
    }
  }
}