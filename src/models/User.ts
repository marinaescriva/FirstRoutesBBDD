import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role"

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:'name'})
    name!: string

    @Column({name:'password'})

    password!: string

    @Column({name:'name'})
    email!: string

    @Column({name:'created_at'})
    createdAt!: Date

    @Column({name:'updated_at'})
    updatedAt!: Date

    @Column({name:'is_active'})
    isActive!: boolean

    @ManyToOne(()=> Role, (role)=> role.users)
    @JoinColumn({ name: "role_id"})
    role!: Role[];
    
}
