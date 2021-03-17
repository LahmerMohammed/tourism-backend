import { Module } from '@nestjs/common';
import { ReviewEntity } from './review.entity';

@Module({
  imports: [ReviewEntity],
  providers: [/*Service*/],
  controllers: []
})
export class ReviewModule{}