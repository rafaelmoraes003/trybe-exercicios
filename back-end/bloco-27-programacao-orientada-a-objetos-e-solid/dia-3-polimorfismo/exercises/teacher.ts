import { Employee } from "./employee";

export default class Teacher extends Employee {
  private _subject: string;

  constructor(name: string, birthDate: Date, salary: number, subject: string) {
    super(name, birthDate, salary);
    this._subject = subject;
  }

  get subject() {
    return this._subject;
  }
}