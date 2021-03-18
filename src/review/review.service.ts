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

  updateOne(review : ReviewEntity){
    return this.reviewRepository.save(review);
  }


  findAllByPlace(place_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.find({place: {id: place_id}});
  }


  findAllByUser(user_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.find({user: {id: user_id}})
  }


  findAllByUserAndPlace(place_id : string , user_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.find({user: {id: user_id} , place: {id: place_id}});
  }
  
}