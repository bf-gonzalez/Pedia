import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentsById, schedule } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:turnId", getAppointmentsById);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:turnId", cancel);

export default appointmentsRouter;