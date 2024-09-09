import { IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsIn(['client', 'provider'])
  role: 'client' | 'provider';
}
