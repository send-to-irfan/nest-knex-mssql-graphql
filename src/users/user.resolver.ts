import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/user.dto';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('allUsers')
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Query('user')
  async getUser(@Args('id') id: string) {
    return this.usersService.getUserById(parseInt(id, 10));
  }

  @Mutation('createUser')
  async createUser(@Args('input') input: CreateUserDto) {
    return this.usersService.createUser(input);
  }

  @Mutation('updateUser')
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: CreateUserDto,
  ) {
    return this.usersService.updateUser(parseInt(id, 10), input);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(parseInt(id, 10));
  }
}
