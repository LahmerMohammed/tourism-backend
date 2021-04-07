import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
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
  async addOne( @Body() reviewDTO : ReviewDTO) {

    const review = mapper.map(reviewDTO,ReviewEntity,ReviewDTO);
    this.reviewService.addOne(review);
  }

  @Get('/find')
  async search(@Body() reviewEntity : ReviewEntity) : Promise<ReviewEntity[]>
  {
    return await this.reviewService.findBy(reviewEntity);
  }

  @Put()
  async updateOne(@Query('review_id') review_id : string , @Body()review :  ReviewDTO)
  {
    await this.reviewService.updateOne(review_id , review);
  }

  @Delete()
  async deleteOne(@Query('reivew_id') review_id : string){
    this.reviewService.deleteOne(review_id);
  }

}

