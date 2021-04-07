import {  Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewDTO } from "./review.dto";
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

  deleteOne(review_id : string) 
  {
    this.reviewRepository.delete({id: review_id});
  }

  updateOne(review_id : string , review : ReviewDTO){

    const to_update =  this.reviewRepository.findOne({id: review_id});
    
    if( to_update)
    {
      Object.keys(to_update).forEach(key=>to_update[key]=review[key]);
    }
  }

  findBy(reviewEntity : ReviewEntity) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.find(reviewEntity);
  }
  
}