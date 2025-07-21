import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const dataUser = this.userRepository.create({...createUserDto, age: Number(createUserDto.age)});
    const result = this.userRepository.save(dataUser);
    return result;
    // Uncomment the following line if you want to save the user directly without creating an instance first
    // return this.userRepository.save({
    //   ...createUserDto,
    //   age: Number(createUserDto.age),
    // });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

async update(id: number, updateUserDto: UpdateUserDto) {
  const updateData: Partial<UpdateUserDto> = { ...updateUserDto };

  if (updateUserDto.age !== undefined) {
    const age = Number(updateUserDto.age);
    if (isNaN(age)) {
      throw new BadRequestException('Age must be a valid number');
    }
    updateData.age = age;
  }

  await this.userRepository.update(id, updateData);
  const updatedUser = await this.userRepository.findOneBy({ id });
  if (!updatedUser) {
    throw new Error(`User with ID ${id} not found`);
  }
  return updatedUser;
}

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
