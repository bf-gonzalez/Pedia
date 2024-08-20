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
exports.cancelAppointmentService = exports.scheduleAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield data_source_1.AppointmentModels.find();
    return allAppointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentByIdService = (tunrId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModels.findOneBy({
        id: tunrId,
    });
    if (!appointment)
        throw new Error("Turno inexistente");
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const scheduleAppointmentService = (scheduleAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModels.findOneBy({
        id: scheduleAppointmentDto.userId,
    });
    if (!user)
        throw Error("Usuario inexistente");
    const newAppointment = data_source_1.AppointmentModels.create(scheduleAppointmentDto);
    newAppointment.user = user;
    yield data_source_1.AppointmentModels.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const cancelAppointmentService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModels.findOneBy({
        id: turnId,
    });
    if (!appointment)
        throw Error("Truno inexistente");
    appointment.status = "cancelled";
    yield data_source_1.AppointmentModels.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
