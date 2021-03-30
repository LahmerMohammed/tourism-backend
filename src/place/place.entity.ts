import { AutoMap } from "@automapper/classes";
import { ReviewEntity } from "src/review/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";





@Entity('place')
export class PlaceEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @AutoMap()
  @Column({type: "varchar" , unique: true})
  name : string;

  @AutoMap()
  @Column({type: "varchar"})
  description : string;

  @AutoMap()
  @Column()
  city : string;

  @AutoMap()
  @Column({type: "varchar"})
  province : string;

  @AutoMap()
  @Column({type : "double precision" , nullable: false})
  location_x : number;

  @AutoMap()
  @Column({type : "double precision" , nullable: false})
  location_y : number;

  @OneToMany(type => ReviewEntity ,  review => review.place)
  reviews : ReviewEntity[];
  

}