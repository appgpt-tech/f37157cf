//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("GraphParameters")
export class GraphParametersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Daysofweek: string;

@Column({nullable: true})
Drinkingamount: string;

@Column({nullable: true})
Id: string;


}
