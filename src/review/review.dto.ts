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
} from 'class-validator';

import { AutoMap } from '@automapper/classes';



export class ReviewDTO {

  @AutoMap()
  @IsEnum([1,2,3,4,5])
  rating : number;

  @AutoMap()
  @IsNotEmpty()
  comment: string;

  @AutoMap()
  @IsNotEmpty()
  user_id: string;

  @AutoMap()
  @IsNotEmpty()
  place_id: string;
}