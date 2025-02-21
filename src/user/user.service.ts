import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './entities/User.entities';
import { CreateUserDto } from './dto/create-user.dto';



@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;

    return await this.userRepository.save(user); 
  }

  public async findAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.id = id;
    return await this.userRepository.save(user);
  }

  public async delete(id: number): Promise<{}> {
    return await this.userRepository.delete(id);
  }
}
