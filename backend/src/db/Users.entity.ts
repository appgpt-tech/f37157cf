//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Name: string;

@Column({nullable: true})
Surname: string;

@Column({nullable: true})
Consumptionofalcohol: string;

@Column({nullable: true})
Id: string;


}
