import { Place } from "src/place/place.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/user/user.entiy';




@Entity('review')
export class Review {

  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({enum: [1,2,3,4,5]})
  rating : number;

  @ManyToOne(type => Place , place => place.reviews , { onDelete : 'CASCADE'})
  place : Place;

  @ManyToOne(type => User , user => user.reviews , { onDelete : 'CASCADE'})
  user : User;

}