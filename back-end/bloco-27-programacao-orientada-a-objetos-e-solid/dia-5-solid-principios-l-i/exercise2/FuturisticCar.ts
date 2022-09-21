import { IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Driving a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
