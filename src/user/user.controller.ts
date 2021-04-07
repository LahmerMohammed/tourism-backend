import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { mapper } from '../utility/mapper';

const bcrypt = require('bcrypt');
const saltRounds = 10;


@Controller('user')
export class UserController{


  public constructor(
    private userService : UserService
  ){}


  @Post()
  async addOne(@Body() userDTO: UserDTO) {
    
    const user = mapper.map(userDTO,UserEntity,UserDTO);
    
    user.password = bcrypt.hashSync(user.password, saltRounds);
    await this.userService.addOne(user);
  }


  @Get()
  async findAll() : Promise<UserEntity[]>
  {
    return await this.userService.findAll();
  }

  @Delete()
  async deleteOne(@Query('user_id') user_id: string) {
    await  this.userService.deleteOne(user_id);
  }

  @Put()
  async updateOne(@Query('user_id') user_id : string , @Body() user : UserDTO)
  {
    await this.updateOne(user_id,user);
  }

}