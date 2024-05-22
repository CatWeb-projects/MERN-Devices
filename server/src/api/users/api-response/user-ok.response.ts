import { ApiResponseOptions } from '@nestjs/swagger';

export const okUserResponse: ApiResponseOptions = {
  schema: {
    example: {
      _id: "664b51c5b444d329b3be7468",
      first_name: "Theodore",
      last_name: "Uzun",
      email: "uzuntudor@gmail.com",
      password: "$2b$10$u28OJNAlyeD6gxvroZ5uuOCM5/REJf7zpTA7tVVszpeRbJGSsiorW",
      role: "admin",
      created_at: "Mon May 20 2024 16:36:05 GMT+0300 (Ora de vară a Europei de Est)"
    }
  }
}