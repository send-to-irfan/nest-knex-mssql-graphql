import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(): Promise<any> {
    return await this.knex('users').select('*');
  }

  async createUser(CreateUserDto: CreateUserDto): Promise<any> {
    const saltRound = 10;

    try {
      const hashedPassword = await bcrypt.hash(
        CreateUserDto.password,
        saltRound,
      );
      await this.knex('users').insert({
        name: CreateUserDto.name,
        email: CreateUserDto.email,
        password: hashedPassword,
      });

      return 'User created successfully';
    } catch (error) {
      // Handle the error, log it, and return an appropriate error message
      console.error('Error creating user:', error);
      return 'Failed to create a user. Please check your input.';
    }
  }

  async getUserById(id: number): Promise<any> {
    if (!id) {
      throw new NotFoundException(`User ${id} does not exist`);
    }

    const user = await this.knex('users').where({ id }).first();
    if (!user) {
      throw new NotFoundException(`User ${id} does not exist`);
    }
    return user;
  }

  async updateUser(id: number, CreateUserDto: CreateUserDto): Promise<any> {
    const userToUpdate = await this.knex('users').where({ id }).first();
    if (!userToUpdate) {
      throw new NotFoundException(`User ${id} does not exist`);
    }
    if (CreateUserDto.password) {
      const saltRound = 10;
      CreateUserDto.password = await bcrypt.hash(
        CreateUserDto.password,
        saltRound,
      );
    }

    const updatedUser = await this.knex('users').where({ id }).update({
      name: CreateUserDto.name,
      email: userToUpdate.email,
      password: CreateUserDto.password,
    });

    return updatedUser;
  }

  async deleteUser(id: number): Promise<any> {
    const userToDelete = await this.knex('users').where({ id }).first();

    if (!userToDelete) {
      throw new NotFoundException(`User ${id} does not exist`);
    }

    return await this.knex('users').where({ id }).del();
  }
}
