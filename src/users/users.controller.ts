import { Body, Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async getAllUsers(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Post('create')
  async createUser(@Body() CreateUserDto: CreateUserDto): Promise<any> {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get('get/:id')
  async getUserById(@Param('id') id: number): Promise<any> {
    return this.usersService.getUserById(id);
  }

  @Put('update/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() CreateUserDto: CreateUserDto,
  ): Promise<any> {
    return this.usersService.updateUser(id, CreateUserDto);
  }

  @Delete('delete/:id')
  async deleteUserById(@Param('id') id: number): Promise<any> {
    return this.usersService.deleteUser(id);
  }
}
