import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PlaceDTO } from "./place.dto";
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
 
  updateOne(place_id :string , place : PlaceDTO) {
    const to_update = this.placeRepository.findOne({id: place_id});
    
    if( to_update)
    {
      Object.keys(place).forEach(key=>to_update[key]=place[key]);
    }
  }

  deleteOne(place_id: string ){
    this.placeRepository.delete({id: place_id})
  }

  findOne(place_id: string ){
    this.placeRepository.findOne({id: place_id})
  }

}