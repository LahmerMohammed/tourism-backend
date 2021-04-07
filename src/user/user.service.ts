import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectUnsubscribedError } from "rxjs";
import { Repository } from "typeorm";
import { UserDTO } from "./user.dto";
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

  updateOne(user_id : string , user: UserDTO)
  {
    const to_update = this.userRepository.findOne({id: user_id});

    if( to_update )
    {
      Object.keys(user).forEach(key => to_update[key] = user[key]);
    }
  }

  deleteOne(user_id : string) {
    this.userRepository.delete(user_id);
  }

}