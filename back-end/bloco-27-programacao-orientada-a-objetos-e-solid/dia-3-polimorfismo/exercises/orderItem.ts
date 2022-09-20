export default class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    if (name.length < 3 || price < 0) throw new Error();
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}
