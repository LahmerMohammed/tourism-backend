import { Module } from '@nestjs/common';
import { Review } from './review.entity';

@Module({
  imports: [Review],
  providers: [/*Service*/],
  controllers: []
})
export class ReviewModule{}