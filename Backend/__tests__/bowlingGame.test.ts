import { BowlingGame } from "../src/models/game";

describe("BowlingGame", () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it("should correctly calculate the total score for a game with no strikes or spares", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(2);
    }
    expect(game.getInfo().totalScore).toBe(36);
  });

  it("should correctly calculate the score for a game with one strike", () => {
    game.roll(10);
    for (let i = 0; i < 18; i++) {
      game.roll(2);
    }
    expect(game.getInfo().totalScore).toBe(50);
  });

  it("should correctly calculate the score for a game with one spare", () => {
    game.roll(7);
    game.roll(3);
    for (let i = 0; i < 18; i++) {
      game.roll(2);
    }
    expect(game.getInfo().totalScore).toBe(48);
  });

  it("should correctly calculate the score for a perfect game (12 strikes)", () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.getInfo().totalScore).toBe(300);
  });

  it("should correctly calculate the score for a game with a spare on the 10th frame", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(2);
    }
    game.roll(5);
    game.roll(5);
    game.roll(5);
    expect(game.getInfo().totalScore).toBe(51);
  });

  it("should correctly calculate the score for a game with a strike on the 10th frame", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(2);
    }
    game.roll(10);
    game.roll(5);
    game.roll(3);
    expect(game.getInfo().totalScore).toBe(54);
  });

  it("should correctly calculate the score for a game with a mix of strikes and spares", () => {
    game.roll(10); // Strike  -> 20
    game.roll(7);
    game.roll(3); // Spare    -> 19
    game.roll(9);
    game.roll(0); //          -> 9
    game.roll(10); // Strike   -> 27
    game.roll(10); // Strike   -> 19
    game.roll(7);
    game.roll(2); //           -> 9
    game.roll(6);
    game.roll(3); //           -> 9
    game.roll(10); // Strike   -> 30
    game.roll(10); // Strike   -> 25
    game.roll(10); // Strike   -> 17
    game.roll(5);
    game.roll(2);

    expect(game.getInfo().totalScore).toBe(184);
  });
});
