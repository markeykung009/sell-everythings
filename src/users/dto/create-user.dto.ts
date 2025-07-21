import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
@IsString()
name: string;


@IsNotEmpty()
@IsNumber()
age: string;

@IsNotEmpty()
@IsEmail()
email: string;
}
