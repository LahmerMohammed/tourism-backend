import { Review } from "src/Review/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";





@Entity('place')
export class Place {
  
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({type: "varchar" , unique: true})
  name : string;

  @Column({type: "varchar"})
  description : string;

  // TODO : change city , province to enums

  @Column()
  city : string;

  @Column({type: "varchar"})
  province : string;

  @Column({type : "geography" , nullable: false})
  location : string;

  @Column()
  @OneToMany(type => Review ,  review => review.place  , { onDelete : 'NO ACTION'})
  reviews : Review[];
  

}