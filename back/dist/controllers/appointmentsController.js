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
exports.cancel = exports.schedule = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAppointments = yield (0, appointmentService_1.getAllAppointmentsService)();
        res.status(200).json(allAppointments);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { turnId } = req.params;
        const appointment = yield (0, appointmentService_1.getAppointmentByIdService)(Number(turnId));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId, description } = req.body;
        const newAppointment = yield (0, appointmentService_1.scheduleAppointmentService)({
            date,
            time,
            userId,
            description,
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { turnId } = req.params;
        yield (0, appointmentService_1.cancelAppointmentService)(Number(turnId));
        res.status(200).json({ message: "Turno cancelado" });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.cancel = cancel;
