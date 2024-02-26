
import "reflect-metadata"
import 'dotenv/config'  //es la solucion de arriba, también comenté la dotenv.config().
import { DataSource } from "typeorm"
import { Roles1708945333761 } from "./migrations/1708945333761-roles"
import { Users1708948594147 } from "./migrations/1708948594147-users"
import { Authors1708949773021 } from "./migrations/1708949773021-authors"
import { Books1708950262101 } from "./migrations/1708950262101-books"
import { FavouriteBooks1708950751584 } from "./migrations/1708950751584-favourite-books"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "sfd_library_online",
    entities: [],
    migrations:[Roles1708945333761 , Users1708948594147, Authors1708949773021,Books1708950262101,FavouriteBooks1708950751584],
    synchronize: false,
    logging: false,
})