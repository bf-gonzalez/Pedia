import { Router } from "express";
import userRouter from "./userRoutes";
import appointmentsRouter from "./appointmentsRouter";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentsRouter);

export default indexRouter;