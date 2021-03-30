import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from './place/place.module';
import { ReviewModule} from './review/review.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }) ,
    PlaceModule , ReviewModule  , UserModule ],
})
export class AppModule {}
