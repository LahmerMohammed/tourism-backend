import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlaceEntity } from "./place.entity";



@Injectable()
export class PlaceService {

  public constructor(
    @InjectRepository(PlaceEntity)
    private placeRepository : Repository<PlaceEntity>
    ){}


  findAll() : Promise<PlaceEntity[]> 
  {
    return this.placeRepository.find();
  }

  addOne(place : PlaceEntity) {
    this.placeRepository.save(place);
  }

}