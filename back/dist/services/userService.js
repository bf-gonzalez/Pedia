"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.creteUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const data_source_1 = require("../config/data-source");
const CredentialsService_1 = require("./CredentialsService");
const users = [
    {
        id: 1,
        name: "Marge Bubbie",
        email: "marge@gmal.com",
        birthdate: "1980-01-01",
        nDni: "12345678",
        credentialsId: 1,
    },
];
let id = 10;
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield data_source_1.UserModels.find({
        relations: { appointments: true }
    });
    console.log('Usuarios obtenidos:', users);
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModels.findOne({
        where: { id },
        relations: ["appointments"]
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.getUserByIdService = getUserByIdService;
const creteUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield data_source_1.UserModels.create(createUserDto);
    const newCredential = yield (0, CredentialsService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    newUser.credential = newCredential;
    yield data_source_1.UserModels.save(newUser);
    return newUser;
});
exports.creteUserService = creteUserService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModels.findOneBy({
        credential: { id: credentialId }
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
