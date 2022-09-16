class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(d: number, m: number, y: number) {
    if (Data.validateDate(d, m, y)) {
      this._day = d;
      this._month = m;
      this._year = y;
    } else {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    }
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  set day (newValue: number) {
    if (newValue > 0 && newValue < 32) {
      this._day = newValue;
    }
  }

  set month (newValue: number) {
    if (newValue > 0 && newValue < 13) {
      this._month = newValue;
    }
  }

  set year (newValue: number) {
    if (newValue > 1899 && newValue < 2101) {
      this._year = newValue;
    }
  }

  public getMonthName(): string {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const month = months[this._month - 1];
    return month;
  }

  public isLeapYear(): boolean {
    return this._year % 4 === 0
  }

  public compare(date: Data): number {
    const currDate = `${this._year}-${this._month}-${this._day}`;
    const dateStr = `${date._year}-${date._month}-${date._day}`;
    if (new Date(currDate) > new Date(dateStr)) return 1;
    if (new Date(dateStr) > new Date(currDate)) return -1;
    return 0;
  }

  private static validateDate(day: number, month: number, year: number)
  : boolean {
  const dateStr = `${year}-${month}-${day}`;

  if (new Date(dateStr).getDate() !== day) return false;

  return true;
}
}