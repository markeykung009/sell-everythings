import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class UpdateUserDto {
@IsOptional()
@IsString()
name: string;


@IsOptional()
@IsInt()
@Min(0)
age?: number;

@IsOptional()
@IsEmail()
email: string;
}
