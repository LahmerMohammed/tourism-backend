import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { mapper } from "src/utility/mapper";
import { ReviewDTO } from "./review.dto";
import { ReviewEntity } from "./review.entity";
import { ReviewService } from "./review.service";




@Controller('review')
export class ReviewController {


  public constructor(
    private reviewService : ReviewService
  ){}

  @Post()
  async addOne(@Body() reviewDTO : ReviewDTO) {

    const review = mapper.map(reviewDTO,ReviewEntity,ReviewDTO);
    this.reviewService.addOne(review);
  }

  @Get('/search')
  async search(@Body() reviewEntity : ReviewEntity) : Promise<ReviewEntity[]>
  {
    return await this.reviewService.findBy(reviewEntity);
  }

}

