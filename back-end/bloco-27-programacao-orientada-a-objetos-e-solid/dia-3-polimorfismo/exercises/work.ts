import Evaluation from "./evaluation";
import Teacher from "./teacher";

export default class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.validateScore(score);
  }

  get score() {
    return this._score;
  }

  set score(newScore: number) {
    this.validateScore(newScore);
    this._score = newScore;
  }

  get teacher() {
    return this._teacher
  }

  set teacher(newTeacher) {
    this._teacher = newTeacher;
  }

  validateScore(score: number) {
    if (score < 0 || score > 50) throw new Error();
  }
}