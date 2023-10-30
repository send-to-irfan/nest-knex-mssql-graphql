import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsStrongPassword,
} from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
