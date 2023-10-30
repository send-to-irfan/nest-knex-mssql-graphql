import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersResolver } from './user.resolver';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
