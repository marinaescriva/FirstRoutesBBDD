import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:'name'})
    name!: string

    @Column({name:'password'})

    password!: string

    @Column({name:'name'})
    email!: string

    @Column({name:'created_at'})
    createdAt!: Timestamp

    @Column({name:'updated_at'})
    updatedAt!: Timestamp

    @Column({name:'is_active'})
    isActive!: boolean

}
