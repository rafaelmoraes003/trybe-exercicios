enum Colors {
    black = 'black',
    white = 'white',
    red = 'red',
    silver = 'silver',
  };
  
  enum Doors {
    one = 1,
    two,
    three,
    four,
  }
  
  enum Directions {
    right = 'right',
    left = 'left',
  }
  
  interface Car {
    brand: string,
    color: Colors,
    doors: number,
    honk(): void,
    isOn: boolean,
    isOff: boolean,
    openTheDoor(door: Doors): void,
    closeTheDoor(door: Doors): void,
    turnOn(): void,
    turnOff(): void,
    speedUp(): void,
    speedDown(): void,
    stop(): void,
    turn(direction: Directions): void,
  };
  
  class Car {
    constructor(brand: string, color: Colors, doors: number) {
      this.brand = brand;
      this.color = color;
      this.doors = doors;
      this.isOn = false,
      this.isOff = true;
    }
  
    honk(): void {
      console.log('honked.')
    }
  
    openTheDoor(door: Doors): void {
      console.log(`door ${door} is open`)
    }
  
    closeTheDoor(door: Doors): void {
      console.log(`door ${door} is closed`);
    }
  
    turnOn(): void {
      this.isOn = true;
      this.isOff = false;
      console.log('Car is on');
    }
  
    turnOff(): void {
      this.isOn = false;
      this.isOff = true;
      console.log('Car is off');
    }
  
    speedUp(): void {
      console.log('Car is speeding up');
    }
  
    speedDown(): void {
      console.log('Car is speeding down');
    }
  
    stop(): void {
      console.log('Car is stopped');
    }
  
    turn(direction: Directions): void {
      console.log(`Car is turning ${direction}`);
    }
  }
  
  const car = new Car('Volkswagen', Colors.silver, Doors.four);
  
  car.turnOn();
  car.turn(Directions.left);
  car.turn(Directions.right);
  car.speedUp();
  car.turn(Directions.right);
  car.turnOff();
  car.openTheDoor(Doors.four);
  car.closeTheDoor(Doors.four);
  car.turnOn();
  car.turn(Directions.right);
  car.speedUp();
  car.turn(Directions.left);
  car.turn(Directions.right);
  car.turnOff();