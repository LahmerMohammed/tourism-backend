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

import { AutoMap } from '@automapper/classes';


export class UserDTO {
  @AutoMap()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;

  @AutoMap()
  @Min(4)
  password: string;

}
