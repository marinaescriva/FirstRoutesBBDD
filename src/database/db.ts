
import "reflect-metadata"
import 'dotenv/config'  //es la solucion de arriba, también comenté la dotenv.config().
import { DataSource } from "typeorm"
import { Roles1708945333761 } from "./migrations/1708945333761-roles"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "sfd_library_online",
    entities: [],
    migrations:[Roles1708945333761],
    synchronize: false,
    logging: false,
})