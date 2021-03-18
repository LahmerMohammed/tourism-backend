import { ReviewEntity } from "src/review/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";





@Entity('place')
export class PlaceEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({type: "varchar" , unique: true})
  name : string;

  @Column({type: "varchar"})
  description : string;

  @Column()
  city : string;

  @Column({type: "varchar"})
  province : string;

  @Column({type : "double precision" , nullable: false})
  location_x : number;

  @Column({type : "double precision" , nullable: false})
  location_y : number;

  @OneToMany(type => ReviewEntity ,  review => review.place)
  reviews : ReviewEntity[];
  

}