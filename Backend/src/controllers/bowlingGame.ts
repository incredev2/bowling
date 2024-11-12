import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { BowlingGame } from "../models/game";

const games: {
  [userId: string]: BowlingGame;
} = {};

export async function createNewGame(
  req: Request,
  res: Response
): Promise<void> {
  const { userId } = req.body;
  if (!userId) {
    res
      .status(HttpStatusCode.BadRequest)
      .json({ msg: "User Id is required\n" });
    return;
  }
  if (games[userId]) {
    res
      .status(HttpStatusCode.BadRequest)
      .json({ msg: "You already created another game!\n" });
    return;
  }
  games[userId] = new BowlingGame();
  res.status(HttpStatusCode.Created).json(games[userId].getInfo());
}

export async function updateGame(req: Request, res: Response): Promise<any> {
  const { userId, pins } = req.body;
  if (!userId || !pins) {
    res
      .status(HttpStatusCode.BadRequest)
      .json({ msg: "User Id and pins are required" });
    return;
  }
  if (!games[userId]) {
    res
      .status(HttpStatusCode.NotFound)
      .json({ msg: "You haven't create a game yet" });
    return;
  }
  const data = games[userId].roll(+pins);
  if (data) {
    res.status(HttpStatusCode.Ok).json(data);
    return;
  }
  res
    .status(HttpStatusCode.InternalServerError)
    .json({ msg: "Unexpected error occured" });
}

export async function getGameStatus(req: Request, res: Response): Promise<any> {
  const { id } = req.params;
  if (!id) {
    res.status(HttpStatusCode.BadRequest).json({ msg: "User Id required" });
    return;
  }
  const game = games[id];
  if (game) {
    res.status(HttpStatusCode.Ok).json(game.getInfo());
    return;
  }
  res.status(HttpStatusCode.NotFound).json({ msg: "Game Not Found" });
  return;
}

export async function endGame(req: Request, res: Response): Promise<any> {}
