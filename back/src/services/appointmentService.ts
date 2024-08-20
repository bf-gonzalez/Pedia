import { AppointmentModels, UserModels } from "../config/data-source"
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import ICreateAppointmentDto from "../interfaces/ICreateAppointmentDto";




export const getAllAppointmentsService = async ():Promise <Appointment[]> =>{
    const allAppointments: Appointment[] = await AppointmentModels.find()
    return allAppointments;
};

export const getAppointmentByIdService = async (tunrId: number): Promise <Appointment> => {
    const appointment: Appointment | null = await AppointmentModels.findOneBy({
        id: tunrId,
    })
    if(!appointment)throw new Error("Turno inexistente");
    return appointment;
};

export const scheduleAppointmentService = async (scheduleAppointmentDto: ICreateAppointmentDto): Promise<Appointment> =>{
    const user: User | null = await UserModels.findOneBy({
        id: scheduleAppointmentDto.userId,
        });
        if(!user) throw Error("Usuario inexistente");
    const newAppointment: Appointment = AppointmentModels.create(scheduleAppointmentDto);
        newAppointment.user = user;

    await AppointmentModels.save(newAppointment);
        
    return newAppointment;
    

};

export const cancelAppointmentService = async (turnId: number): Promise<void> => {
    const appointment: Appointment | null = await AppointmentModels.findOneBy({
        id: turnId,
    });
    if(!appointment) throw Error("Truno inexistente")
    appointment.status = "cancelled";
    await AppointmentModels.save(appointment)
};