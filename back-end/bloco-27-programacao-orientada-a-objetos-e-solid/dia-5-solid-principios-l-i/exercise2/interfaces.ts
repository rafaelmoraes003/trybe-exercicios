export interface onlyFliesVehicle {
  fly(): void;
}

export interface onlyMovesVehicle {
  drive(): void;
}

export interface IVehicle extends onlyMovesVehicle, onlyFliesVehicle { } 