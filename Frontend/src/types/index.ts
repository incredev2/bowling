interface FramesType {
  firstRoll: number | null;
  secondRoll: number | null;
  score: number;
  finalBonus?: number[];
  isStrike?: boolean;
  isSpare?: boolean;
  currentSum: number;
}

export interface StatusType {
  totalScore: number;
  currentFrame: number;
  frames: FramesType[];
}
