import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ReviewEntity } from "./review.entity";
import { ReviewService } from "./review.service";




@Controller('review')
export class ReviewController {


  public constructor(
    private reviewService : ReviewService
  ){}

  @Post()
  async addOne(@Body() review : ReviewEntity) {
    console.log(review);
    this.reviewService.addOne(review);
  }

  @Get()
  async findAllByPlace(@Query('place_id') place_id : string) : Promise<ReviewEntity[]>
  {
    return await this.reviewService.findAllByPlace(place_id);
  }

  
  @Get()
  async findAllByUser(@Query('user_id') user_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewService.findAllByUser(user_id);
  }

  @Get()
  async findAllByUserAndPlace(@Query('user_id') user_id : string , @Query('place_id') place_id : string) : Promise<ReviewEntity[]>
  {
    return this.reviewService.findAllByUserAndPlace(place_id , user_id);
  }

}

