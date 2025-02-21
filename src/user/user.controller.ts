import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  public async findAll() {
    return await this.userService.findAllUser();
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto, ) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
