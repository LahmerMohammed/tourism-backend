import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { placeController } from './place.controller';
import { PlaceEntity } from './place.entity';
import { PlaceService } from './place.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceEntity])],
  providers: [PlaceService],
  controllers: [placeController]
})
export class PlaceModule{}