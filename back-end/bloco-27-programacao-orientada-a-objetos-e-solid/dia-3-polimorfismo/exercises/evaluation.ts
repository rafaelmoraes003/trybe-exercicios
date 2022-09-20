import Teacher from "./teacher";

export default abstract class Evaluation {
  protected _score: number;
  protected _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this._teacher = teacher;
    this.validateScore(score);
    this._score = score;
  }

  get score() {
    return this._score;
  }

  set score(newScore) {
    this.validateScore(newScore);
    this._score = newScore;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(newTeacher: Teacher) {
    this._teacher = newTeacher;
  }

  protected validateScore(score: number) {
    if (score < 0) throw new Error();
  }

}
