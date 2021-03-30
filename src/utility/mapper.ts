import { classes } from "@automapper/classes";
import { createMapper, mapFrom } from "@automapper/core";
import { PlaceDTO } from "src/place/place.dto";
import { PlaceEntity } from "src/place/place.entity";
import { ReviewDTO } from "src/review/review.dto";
import { ReviewEntity } from "src/review/review.entity";
import { UserDTO } from "src/user/user.dto";
import { UserEntity } from "src/user/user.entity";



export const mapper = createMapper({
  name: 'mapper',
  pluginInitializer: classes
});

mapper.createMap(UserDTO , UserEntity);

mapper
    .createMap(ReviewDTO , ReviewEntity)
    .forMember(
  (destination : ReviewEntity) => {destination.place},
  mapFrom((source:ReviewDTO) => source.place_id)
)
  .forMember(
  (destination : ReviewEntity) => {destination.user},
  mapFrom((source:ReviewDTO) => source.user_id)
)

mapper.createMap(PlaceDTO , PlaceEntity);



