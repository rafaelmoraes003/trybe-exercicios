import { onlyMovesVehicle } from "./interfaces";

export default class Car implements onlyMovesVehicle {
  drive(): void {
    console.log('Car is moving.');
  }
}