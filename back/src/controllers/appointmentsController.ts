import { Request, Response } from "express"
import { Appointment } from "../entities/Appointment";
import { scheduleAppointmentService, getAllAppointmentsService, getAppointmentByIdService, cancelAppointmentService } from "../services/appointmentService";
import { resolveTxt } from "dns";
import ICreateAppointmentDto from "../interfaces/ICreateAppointmentDto";

export const getAllAppointments = async (req: Request, res: Response) =>{
    try {
        const allAppointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(allAppointments);
    } catch (error: any) {
        res.status(404).json({message: error.message})
    }
};

export const getAppointmentsById = async (req: Request <{turnId: string},{},{}>, res: Response) =>{
    try {
        const { turnId } =req.params;
        const appointment: Appointment = await getAppointmentByIdService(Number(turnId));
        res.status(200).json(appointment)
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
 
};

export const schedule = async (req: Request<{}, {}, ICreateAppointmentDto>, res: Response) =>{
    try {
        const {date, time, userId, description} =req.body;
        const newAppointment: Appointment = await scheduleAppointmentService({
            date,
            time,
            userId, 
            description,
        });
        res.status(201).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const cancel = async (req: Request<{turnId: string}, {},{}>, res: Response) =>{
    try {
        const { turnId } = req.params;
       
        await cancelAppointmentService(Number(turnId));
        res.status(200).json({message: "Turno cancelado"});
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }

};