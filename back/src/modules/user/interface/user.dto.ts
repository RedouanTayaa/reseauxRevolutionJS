import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty() id: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() lastUpdate: Date;
  @IsNotEmpty() refreshToken: string;
}