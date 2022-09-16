class Client {
  _name: string;

  constructor(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    this._name = newValue;
  }
}

class OrderItem {
  _name: string;
  _price: number;

  constructor(n: string, p: number) {
    this._name = n;
    this._price = p;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  set name(newValue: string) {
    this._name = newValue;
  }

  set price(newValue: number) {
    if (newValue > 0) {
      this._price = newValue;
    }
  }
}

class Order {
  client: Client;
  consumedItems: OrderItem[];
  paymentMethod: string;
  discount: number;

  constructor(c: Client, ci: OrderItem[], pm: string, d: number) {
    this.client = c;
    this.consumedItems = ci;
    this.paymentMethod = pm;
    this.discount = d;
  }

  calculateTotal(): number {
    const sum = this.consumedItems.reduce((acc, curr) => acc + curr.price, 0);
    return sum;
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - (this.discount / 100));
  }
}

const client = new Client('Rafael Moraes');
const coke = new OrderItem('Coca Cola', 5);
const popcorn = new OrderItem('Popcorn', 10);
const order = new Order(client, [coke, popcorn], 'money', 50)
console.log(order.calculateTotalWithDiscount())