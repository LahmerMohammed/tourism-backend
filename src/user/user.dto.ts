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
} from 'class-validator';


export class UserDTO {


  @IsEmail()
  email: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;

  @Min(4)
  password: string;

}
