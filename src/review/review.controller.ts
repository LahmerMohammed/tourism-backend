import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get('/:place_id')
  async findAllByPlace(@Param('place_id') place_id : string) : Promise<ReviewEntity[]>
  {
    return await this.reviewService.findAllByPlace(place_id);
  }

  /*
  @Get('/:user_id')
  async findAllByUser(@Param() params) : Promise<ReviewEntity[]>
  {
    return this.reviewService.findAllByUser(params.user_id);
  }

  @Get()
  async findAllByUserAndPlace(@Param() params) : Promise<ReviewEntity[]>
  {
    return this.reviewService.findAllByUserAndPlace(params.place_id , params.user_id);
  }*/

}

