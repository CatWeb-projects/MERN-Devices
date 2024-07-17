import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users, UsersSchema } from './schemas/users.schema';
import { DevicesModule } from '../devices/devices.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    }),
    DevicesModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])
  ],
  exports: [UsersModule]
})
export class UsersModule {}
