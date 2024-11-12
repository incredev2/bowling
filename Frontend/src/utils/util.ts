import { StatusType } from "../types";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const calculateAvailablePins = (data: StatusType | null) => {
  if (!data || data.currentFrame === 10) {
    return [];
  }

  const frame = data.frames[data.currentFrame];

  if (frame.firstRoll === null) {
    return numbers;
  }

  if (data.currentFrame === 9) {
    if (frame.firstRoll === 10 || frame.isSpare) {
      return numbers;
    }
    return numbers.filter(
      (num) => frame.firstRoll !== null && frame.firstRoll + num <= 10
    );
  }

  return numbers.filter(
    (num) => frame.firstRoll !== null && frame.firstRoll + num <= 10
  );
};
