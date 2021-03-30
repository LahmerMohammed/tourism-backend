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

  findBy(reviewEntity : ReviewEntity) : Promise<ReviewEntity[]>
  {
    return this.reviewRepository.find(reviewEntity);
  }
  
}