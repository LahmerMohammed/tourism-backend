import { Review } from "src/review/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";






@Entity('user')
export class User {


  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column({type: 'varchar' , unique : true})
  username : string;

  @Column({type : 'varchar'})
  password : string;

  @Column({type: 'varchar', unique : true})
  email : string; 

  @OneToMany(type => Review , review => review.user)
  reviews : Review[];

}