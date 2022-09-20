import Person from "./person";
import Order from './order';

export default class OrderRepository {
  constructor(
    private _orders: Order[] = [],
  ) {}

  addOrder(order: Order): void {
    this._orders = [...this._orders, order];
  }

  removeOrder(order: Order): void {
    const i = this._orders.findIndex(o => o.id === order.id);
    this._orders.splice(i, 1);
  }

  listByClient(client: Person): Order[] {
    return this._orders.filter(o => o.client === client);
  }

  listBySortedValue(param: 'maior' | 'menor'): Order[] {
    if (param === 'maior') {
      return this._orders.sort((a, b) => b.calculateTotalWithDiscount() - a.calculateTotalWithDiscount());
    }
    return this._orders.sort((a, b) => a.calculateTotalWithDiscount() - b.calculateTotalWithDiscount())
  }
}