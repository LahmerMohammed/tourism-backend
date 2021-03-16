import { Module } from '@nestjs/common';
import { Place } from './place.entity';

@Module({
  imports: [Place],
  providers: [/*Service*/],
  controllers: []
})
export class PlaceModule{}