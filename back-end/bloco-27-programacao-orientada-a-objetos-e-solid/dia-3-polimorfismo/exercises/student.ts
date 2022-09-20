import Person from './person';
import EvaluationResult from './evaluationResult';
import { Enrollable } from './enrollable';

class Student extends Person implements Enrollable {
  private _evaluationsResults: EvaluationResult[] = [];
  private _enrollment: string;

  constructor (private name: string, private birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  get evaluationsResults() {
    return this._evaluationsResults;
  }

  public sumGrades(): number {
    return this._evaluationsResults
      .reduce((x, y) => x + y.score, 0)
  }

  public sumAverageGrade(): number {
    return Number((this.sumGrades() / this._evaluationsResults.length).toFixed(1));
  }

  public addEvaluationResult(evaluation: EvaluationResult) {
    this._evaluationsResults = [...this._evaluationsResults, evaluation];
  }

  public generateEnrollment() {
    const rndStr = String(Date.now());
    return `STU${rndStr}`;
  }
}