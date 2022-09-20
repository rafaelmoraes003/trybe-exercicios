import { Enrollable } from "./enrollable";
import Person from "./person";

export class Employee extends Person implements Enrollable {
  private _salary: number;
  private _admissionDate: Date = new Date(Date.now());
  private _enrollment: string;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._salary = salary;
    this._enrollment = this.generateEnrollment(); 
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (newSalary < 0) throw new Error();
    this._salary = newSalary;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(date: Date) {
    if (date.getDate() > Date.now()) throw new Error();
    this._admissionDate = date;
  }

  get enrollment() {
    return this._enrollment;
  }

  public generateEnrollment() {
    const rndStr = String(Date.now());
    return `EMP${rndStr}`;
  }
}