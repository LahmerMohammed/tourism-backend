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



export class ReviewDTO {

  @IsEnum([1,2,3,4,5])
  rating : number;

  @IsNotEmpty()
  comment: string;

  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  place_id: string;
}