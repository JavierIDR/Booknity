import { ApiHideProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {

  /**
   * Debe ser un string de entre 3 y 80 caracteres
   * @example "User1"
   */
  @IsNotEmpty()
  @IsString()
  name: string;
  
  /**
   * Debe ser un string en formato de email y no estar vacío
   * @example "user1@example.com"
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  /**
   * Debe ser un string de entre 8 y 15 caracteres
   * @example "Abcd1234!"
   */
  @IsNotEmpty()
  @IsString()
  password: string;
  
  @ApiHideProperty()
  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean; 

  @IsBoolean()
  @IsOptional()
  isConfirmed?: boolean;
  
  @IsOptional()
  @IsString()
  photoUrl?: string; 
}
