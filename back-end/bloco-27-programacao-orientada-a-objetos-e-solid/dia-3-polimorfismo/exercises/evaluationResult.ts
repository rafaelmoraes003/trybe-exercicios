import Evaluation from "./evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.validatePontuation(score);
    this.validateGradesRelation(score, evaluation);
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation() {
    return this._evaluation
  }

  get score() {
    return this._score
  }

  set score(newScore: number) {
    this.validatePontuation(newScore);
    this._score = newScore;
  }

  set evaluation(newEvaluation: Evaluation) {
    this.validateGradesRelation(this._score, newEvaluation);
    this._evaluation = newEvaluation;
  }

  private validatePontuation(pontuation: number) {
    if (pontuation < 0) throw new Error();
  }
  private validateGradesRelation(pontuation: number, evPontuation: Evaluation) {
    if (pontuation > evPontuation.score) throw new Error();
  }
}