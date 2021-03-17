import { Module } from '@nestjs/common';
import { User } from './user.entity';

@Module({
  imports: [User],
  providers: [/*Service*/],
  controllers: []
})
export class UserModule{}