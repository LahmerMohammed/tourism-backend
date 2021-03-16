import { Module } from '@nestjs/common';
import { User } from './user.entiy';

@Module({
  imports: [User],
  providers: [/*Service*/],
  controllers: []
})
export class UserModule{}