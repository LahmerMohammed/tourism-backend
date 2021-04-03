import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { Validator } from "class-validator";
import { mapper } from "src/utility/mapper";
import { ReviewDTO } from "./review.dto";
import { ReviewEntity } from "./review.entity";
import { ReviewService } from "./review.service";
import { Validator, Validate } from 'typescript-class-validator';




@Controller('review')
export class ReviewController {


  public constructor(
    private reviewService : ReviewService
  ){}

  @Post()
  async addOne( @Body() @Validator() reviewDTO : ReviewDTO) {

    const review = mapper.map(reviewDTO,ReviewEntity,ReviewDTO);
    this.reviewService.addOne(review);
  }

  @Get('/search')
  async search(@Body() reviewEntity : ReviewEntity) : Promise<ReviewEntity[]>
  {
    return await this.reviewService.findBy(reviewEntity);
  }

}

