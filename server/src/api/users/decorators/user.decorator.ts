import { Types } from 'mongoose';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from '../schemas/users.schema';

export const CurrentUser = createParamDecorator(
  (data: keyof (Users & { _id: Types.ObjectId }), ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user[data] : user;
  }
);
