export class Frame {
  firstRoll: number | null;
  secondRoll: number | null;
  isStrike: boolean;
  isSpare: boolean;
  finalBonus?: number[];
  frameIndex: number;
  currentScore: number;
  currentSum: number;
  constructor(idx: number) {
    this.frameIndex = idx;
    this.firstRoll = null;
    this.secondRoll = null;
    this.isStrike = false;
    this.isSpare = false;
    this.currentSum = 0;
    this.currentScore = -1;
    if (idx === 9) {
      this.finalBonus = [];
    }
  }
  //returns true when second fole for current frame is needed.
  addPins(pins: number): boolean {
    if (this.firstRoll === null) {
      this.firstRoll = pins;
      if (pins === 10) {
        this.isStrike = true;
        return this.frameIndex === 9;
      }
      return true;
    }
    if (this.secondRoll === null && !this.isStrike) {
      this.secondRoll = pins;
      if (this.firstRoll + this.secondRoll === 10) {
        this.isSpare = true;
        return this.frameIndex === 9;
      }
      if (!this.isSpare) {
        this.updateScore(this.firstRoll + this.secondRoll);
      }
      return false;
    }
    if (this.frameIndex === 9 && this.finalBonus) {
      if (this.isStrike && this.finalBonus.length < 2) {
        this.finalBonus.push(pins);
        if (this.finalBonus.length === 2) {
          this.currentScore = 10 + this.finalBonus[0] + this.finalBonus[1];
        }
        return this.finalBonus.length === 1;
      }
      if (this.isSpare && this.finalBonus.length === 0) {
        this.finalBonus.push(pins);
        this.currentScore = 10 + pins;
        return false;
      }
    }
    return false;
  }
  getInfo(): any {
    const data: any = {
      firstRoll: this.firstRoll,
      secondRoll: this.secondRoll,
      score: this.currentScore,
      currentSum: this.currentSum,
    };
    if (this.finalBonus) {
      data["finalBonus"] = this.finalBonus;
    }
    if (this.isSpare) {
      data.isSpare = true;
    }
    if (this.isStrike) {
      data.isStrike = true;
    }
    return data;
  }
  updateScore(score: number): void {
    this.currentScore = score;
  }
}

export class BowlingGame {
  frames: Frame[];
  currentFrame: number;
  rolls: number[];
  totalScore: number;
  constructor() {
    this.frames = Array.from({ length: 10 }).map(
      (_, index) => new Frame(index)
    );
    this.currentFrame = 0;
    this.rolls = [];
    this.totalScore = 0;
  }
  roll(pins: number) {
    if (this.currentFrame < 10) {
      if (!this.frames[this.currentFrame].addPins(pins)) {
        this.currentFrame++;
      }
      this.updateScore();
    }
    return this.getInfo();
  }

  updateScore() {
    this.totalScore = 0;
    for (let i = 0; i <= this.currentFrame && i <= 9; i++) {
      const frame = this.frames[i];

      if (frame.currentScore >= 0) {
        this.totalScore += frame.currentScore;
        frame.currentSum = this.totalScore;
        continue;
      }

      if (frame.isSpare) {
        if (i < 9) {
          const nextPin = this.frames[i + 1].firstRoll;
          if (nextPin !== null) {
            frame.updateScore(10 + nextPin);
            this.totalScore += frame.currentScore;
            frame.currentSum = this.totalScore;
          }
        }
      } else if (frame.isStrike) {
        let score = 10;
        if (i < 8) {
          const nextPin = this.frames[i + 1].firstRoll;
          if (nextPin !== null) {
            score += nextPin;
            const secondNextPin =
              this.frames[i + 1].secondRoll ?? this.frames[i + 2]?.firstRoll;
            if (secondNextPin !== null) {
              score += secondNextPin;
              frame.updateScore(score);
              this.totalScore += frame.currentScore;
              frame.currentSum = this.totalScore;
            }
          }
        } else if (i === 8) {
          const nextPin = this.frames[9].firstRoll;
          const { finalBonus } = this.frames[9];
          if (nextPin !== null) {
            if (this.frames[9].isSpare) {
              frame.updateScore(20);
            } else if (this.frames[9].isStrike) {
              if (finalBonus && finalBonus[0]) {
                frame.updateScore(20 + finalBonus[0]);
              }
            } else if (this.frames[9].secondRoll !== null) {
              frame.updateScore(10 + nextPin + this.frames[9].secondRoll);
            }
          }
        }
      }
    }
  }

  getInfo() {
    return {
      totalScore: this.totalScore,
      currentFrame: this.currentFrame,
      frames: this.frames.map((frame) => frame.getInfo()),
    };
  }
}
