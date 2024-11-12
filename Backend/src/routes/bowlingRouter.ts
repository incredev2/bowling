import { Router } from "express";
import { createNewGame, endGame, getGameStatus, updateGame } from "../controllers/bowlingGame";

const bowlingRouter = Router();

bowlingRouter.get("/:id",getGameStatus);
bowlingRouter.post("/", createNewGame);
bowlingRouter.put("/", updateGame);
bowlingRouter.delete("/", endGame)

export { bowlingRouter };
