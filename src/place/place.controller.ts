import { Body, Controller, Get, Post } from "@nestjs/common";
import { PlaceEntity } from "./place.entity";
import { PlaceService } from "./place.service";


@Controller('place')
export class placeController{

  public constructor(
    private placeService : PlaceService
    ){}

  @Post()
  async addOne(@Body() place: PlaceEntity){
    this.placeService.addOne(place);
  }

  @Get()
  async findAll() : Promise<PlaceEntity[]> {
    return this.placeService.findAll();
  }
}