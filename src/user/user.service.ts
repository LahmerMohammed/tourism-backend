import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";




@Injectable()
export class UserService{

  public constructor(
    @InjectRepository(UserEntity)
    private userRepository : Repository<UserEntity>
    ){}

  addOne(user: UserEntity){
    this.userRepository.save(user);
  }

  findAll() : Promise<UserEntity[]>
  {
    return this.userRepository.find();
  }

  

  deleteOne(user_id : string) {
    this.userRepository.delete(user_id);
  }

}