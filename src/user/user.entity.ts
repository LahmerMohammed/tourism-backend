import { ReviewEntity } from "src/review/review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from '@automapper/classes';





@Entity('user')
export class UserEntity {

  
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @AutoMap()
  @Column({type: 'varchar' , unique : true})
  username : string;

  @AutoMap()
  @Column({type : 'varchar'})
  password : string;

  @AutoMap()
  @Column({type: 'varchar', unique : true})
  email : string; 

  @OneToMany(type => ReviewEntity , review => review.user)
  reviews : ReviewEntity[];

}