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
exports.login = exports.register = exports.getUserById = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const CredentialsService_1 = require("../services/CredentialsService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message, });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserByIdService)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({
            mesasage: error.message,
        });
    }
});
exports.getUserById = getUserById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, userService_1.creteUserService)({
            name,
            email,
            birthdate,
            nDni,
            username,
            password
        });
        res.status(201).json({ message: "Usuario creado con exito" });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credentiald = yield (0, CredentialsService_1.validateCredential)({
            username, password
        });
        const user = yield (0, userService_1.findUserByCredentialId)(credentiald.id);
        res.status(200).json({
            loggin: true,
            user,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.mesasage,
        });
    }
});
exports.login = login;
