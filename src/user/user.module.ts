import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Module({
  imports: [UserEntity],
  providers: [/*Service*/],
  controllers: []
})
export class UserModule{}