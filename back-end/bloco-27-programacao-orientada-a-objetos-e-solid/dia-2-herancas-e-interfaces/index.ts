class Person {
  constructor(
      private _name: string,
      private _birthDate: Date,
  ) {}

  get name() {
      return this._name;
  }

  set name(newValue: string) {
      if (newValue.length > 3) {
          this._name = newValue;
      } else {
          throw new Error();
      }
  }

  get birthDate() {
      return this._birthDate;
  }

  set birthDate(newValue: Date) {
      this.validateBirthDate(newValue);
      this._birthDate = newValue;
  }

  private validateBirthDate(value: Date): void {
      if (value.getTime() > new Date().getTime()) throw new Error();
  }

}

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(
      name: string,
      birthDate: Date,
      examsGrades: number[],
      worksGrades: number[]
  ) {
      super(name, birthDate);
      this.validateEnrollment(`${name}${String(this.birthDate).slice(3, 15).split(' ').join('-')}`)
      this.validateArr(examsGrades, 4);
      this.validateArr(worksGrades, 2);
      this._enrollment = `${name}${String(this.birthDate).slice(3, 15).split(' ').join('-')}`;
      this._examsGrades  = examsGrades;
      this._worksGrades = worksGrades;
  }

  get enrollment() {
      return this._enrollment;
  }

  get examsGrades() {
      return this._examsGrades;
  }

  get worksGrades() {
      return this._worksGrades;
  }

  sumGrades(): number {
      const grades = [...this._examsGrades,...this._worksGrades];
      return grades.reduce((acc, curr) => acc + curr, 0);
  }

  public avgGrades(): number {
      const avg = (this.sumGrades() / [...this._examsGrades, ...this._worksGrades].length).toFixed(2);
      return Number(avg);
  }

  private validateArr(arr: number[], maxLenght: number): void {
      if (arr.length > maxLenght) {
          throw new Error();
      }
  }

  private validateEnrollment(enrollment: string) {
      if (enrollment.length < 16) {
          throw new Error();
      }
  }
}

interface Employee {
  registration: string,
  salary: number,
  admissionDate: Date,
  generateRegistration(): string,
}

class Subject {
  private _name: string;

  constructor(name: string) {
      this.validateName(name);
      this._name = name;
  }

  get name() {
      return this._name;
  }

  set name(newValue) {
      this.validateName(newValue);
      this._name = newValue;
  }

  private validateName(name: string) {
      if (name.length < 3) {
          throw new Error();
      }
  }
}

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number;
  private _registration: string;
  public admissionDate: Date;

  constructor(
      name: string,
      birthDate: Date,
      salary: number,
      subject: Subject,
  ) {
      super(name, birthDate);
      this._salary = salary;
      this._subject = subject;
      this._registration = this.generateRegistration();
      this.admissionDate = new Date();
  }

  get salary() {
      return this._salary;
  }

  get subject() {
      return this._subject;
  }

  get registration() {
      return this._registration
  }

  generateRegistration(): string {
      const alphanum = ['123456789'];
      let registration = '';
      for (let i = 0; i < 17; i += 1) {
          registration += alphanum[i]
      }
      return registration;
  }
}