"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
const indexRouter = (0, express_1.Router)();
indexRouter.use("/users", userRoutes_1.default);
indexRouter.use("/appointments", appointmentsRouter_1.default);
exports.default = indexRouter;
