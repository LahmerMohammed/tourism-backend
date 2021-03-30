






import { AutoMap } from '@automapper/classes';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsAlphanumeric,
  IsNotEmpty,
  IsEnum,
  IsDecimal,
  IsAlpha,
} from 'class-validator';



export class PlaceDTO {

  @AutoMap()
  @IsNotEmpty()
  name : string;

  @AutoMap()
  @IsNotEmpty()
  description : string;

  @AutoMap()
  @IsNotEmpty()
  city : string;

  @AutoMap()
  @IsNotEmpty()
  province : string;

  @AutoMap()
  @IsDecimal()
  location_x : number;

  @AutoMap()
  @IsDecimal()
  location_y : number;

}


