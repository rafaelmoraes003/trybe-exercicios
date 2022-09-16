class School {
  name: string;
  registration: string;
  testGrades: number[];
  workGrades: number[];

  constructor(n: string, r: string, tg: number[], wg: number[]) {
    this.name = n;
    this.registration = r;
    this.testGrades = tg;
    this.workGrades = wg;
  }

  sumGrades(): number {
    const grades = [...this.testGrades, ...this.workGrades];
    return grades.reduce((acc, curr) => acc + curr, 0);
  }

  avgGrades(): number {
    const avg = (this.sumGrades() / [...this.testGrades, ...this.workGrades].length).toFixed(2);
    return Number(avg);
  }
}
