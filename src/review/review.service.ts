import {  Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewEntity } from "./review.entity";



@Injectable()
export class ReviewService{


  public constructor(
    @InjectRepository(ReviewEntity)
    private reviewRepository : Repository<ReviewEntity>
    ){}

  addOne(review : ReviewEntity) {
    return this.reviewRepository.save(review);
  }


  findAllByPlace(place_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.query("select * from review rv where rv.place_id = $1" , [place_id]);
  }


  findAllByUser(user_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.query("select * from review rv where rv.user_id = $1" , [user_id]);
  }


  findAllByUserAndPlace(place_id : string , user_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.query("select * from review rv where rv.place_id = $1 and rv.user_id = $2" ,
    [place_id,user_id]);
  }
  
}