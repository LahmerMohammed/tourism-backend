import { PlaceEntity } from "src/place/place.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from 'src/user/user.entity';




@Entity('review')
export class ReviewEntity {

  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({enum: [1,2,3,4,5]})
  rating : number;

  @Column({type: "varchar"})
  comment: string;

  @ManyToOne(type => PlaceEntity , place => place.reviews , { onDelete: 'CASCADE' , nullable: false})
  @JoinColumn({name: 'place_id' , referencedColumnName: 'id'})
  place : PlaceEntity;

  @ManyToOne(type => UserEntity , user => user.reviews , {onDelete: 'CASCADE' , eager: true , nullable: false})
  @JoinColumn({name: 'user_id' , referencedColumnName: 'id'})
  user : UserEntity;

}