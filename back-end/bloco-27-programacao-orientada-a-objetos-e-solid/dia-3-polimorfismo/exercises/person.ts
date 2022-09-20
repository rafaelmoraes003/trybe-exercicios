export default abstract class Person {
  protected _name: string;
  protected _birthDate: Date;
  
  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  abstract generateEnrollment(): string;
}