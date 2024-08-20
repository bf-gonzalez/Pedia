import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User, Credential, Appointment ],
    subscribers: [],
    migrations: [],
})

export const UserModels = AppDataSource.getRepository(User);
export const AppointmentModels = AppDataSource.getRepository(Appointment);
export const CredentialModels = AppDataSource.getRepository(Credential)