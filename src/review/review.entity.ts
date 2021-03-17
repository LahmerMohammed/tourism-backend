import { Place } from "src/place/place.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from 'src/user/user.entity';




@Entity('review')
export class Review {

  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({enum: [1,2,3,4,5]})
  rating : number;

  @ManyToOne(type => Place , place => place.reviews , { cascade: true })
  @JoinColumn({name: 'place_id' , referencedColumnName: 'id'})
  place : Place;

  @ManyToOne(type => User , user => user.reviews , { cascade: true , eager: true})
  @JoinColumn({name: 'user_id' , referencedColumnName: 'id'})
  user : User;

}