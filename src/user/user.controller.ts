import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

const bcrypt = require('bcrypt');
const saltRounds = 10;


@Controller('user')
export class UserController{


  public constructor(
    private userService : UserService
  ){}


  @Post()
  async addOne(@Body() user: UserEntity) {
    user.password = bcrypt.hashSync(user.password, saltRounds);
    this.userService.addOne(user);
  }


  @Get()
  async findAll() : Promise<UserEntity[]>
  {
    return this.userService.findAll();
  }

}