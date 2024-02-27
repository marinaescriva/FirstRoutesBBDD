import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({name:'name'})
    name!: string

    @OneToMany(()=> User, (user)=> User.role)
    users!: User[];
    
}
