"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialModels = exports.AppointmentModels = exports.UserModels = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Appointment_1 = require("../entities/Appointment");
const Credential_1 = require("../entities/Credential");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
exports.UserModels = exports.AppDataSource.getRepository(User_1.User);
exports.AppointmentModels = exports.AppDataSource.getRepository(Appointment_1.Appointment);
exports.CredentialModels = exports.AppDataSource.getRepository(Credential_1.Credential);
