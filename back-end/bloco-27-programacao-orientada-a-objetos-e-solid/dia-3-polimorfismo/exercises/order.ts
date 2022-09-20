import Person from "./person";
import OrderItem from './orderItem';

export default class Order {
  static id: number = 0
  private _id: number;
  private _createdAt: Date;
  private _client: Person;
  private _items: OrderItem[];
  private _paymentMethod: 'cartão' | 'dinheiro' | 'vale';
  private _discount: number = 0;

  constructor(
    client: Person, 
    items: OrderItem[], 
    paymentMethod: 'cartão' | 'dinheiro' | 'vale', 
    discount: number
  ) {
    if (items.length < 1 || discount < 0) throw new Error();
    this._id = Order.id += 1;
    this._createdAt = new Date(Date.now());
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client() {
    return this._client;
  }

  get items() {
    return this._items;
  }

  get paymentMethod() {
    return this._paymentMethod
  }

  get discount() {
    return this._discount
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(date: Date) {
    if (date.getDate() > Date.now()) throw new Error();
    this._createdAt = date;
  }

  calculateTotal(): number {
    return this._items.reduce((x, y) => x + y.price ,0);
  }

  calculateTotalWithDiscount(): number {
    return Number((this.calculateTotal() * ( 1 - (this._discount / 100))).toFixed(2))
  }
}