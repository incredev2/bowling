import { Router } from "express";
import { bowlingRouter } from "./bowlingRouter";

const router = Router();

router.use("/bowling", bowlingRouter);

export { router };
