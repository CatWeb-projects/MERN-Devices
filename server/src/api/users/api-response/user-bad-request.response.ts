import { ApiResponseOptions } from '@nestjs/swagger';

export const badUserResponse: ApiResponseOptions = {
  schema: {
    example: {
      message: 'Invalid username or password',
      error: 'Bad Request',
      statusCode: 400
    }
  }
};
