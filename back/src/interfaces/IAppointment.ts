export enum IAppointmentStatus{
    ACTIVE = "active",
    CANCELLED = "cancelled",
}

interface IAppointment{
    id: number;
    date: string;
    time: string;
    userId: number;
    status: IAppointmentStatus;
    description: string;
};

export default IAppointment;