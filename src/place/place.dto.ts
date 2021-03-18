






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

  @IsNotEmpty()
  name : string;

  @IsNotEmpty()
  description : string;

  @IsNotEmpty()
  city : string;

  @IsNotEmpty()
  province : string;

  @IsDecimal()
  location_x : number;

  @IsDecimal()
  location_y : number;

}


