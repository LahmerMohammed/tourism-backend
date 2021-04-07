import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { PlaceDTO } from "./place.dto";
import { PlaceEntity } from "./place.entity";
import { PlaceService } from "./place.service";


@Controller('place')
export class placeController{

  public constructor(
    private placeService : PlaceService
    ){}

  @Post()
  async addOne(@Body() place: PlaceEntity){
    await this.placeService.addOne(place);
  }

  @Get()
  async findAll() : Promise<PlaceEntity[]> {
    return await  this.placeService.findAll();
  }

  @Delete()
  async deleteOne(@Query('place_id') place_id: string) {
    return await this.placeService.deleteOne(place_id);
  }

  @Get()
  async findOne(@Query('place_id') place_id : string) {
    return await this.placeService.findOne(place_id);
  }

  @Put()
  async updateOne(@Query('place_id') place_id : string , @Body() place : PlaceDTO)
  {
    this.placeService.updateOne(place_id,place);
  }
}