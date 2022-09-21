import { onlyFliesVehicle } from "./interfaces";

export default class Airplane implements onlyFliesVehicle {
  fly(): void {
    console.log('Airplane is flying.')
  }
}