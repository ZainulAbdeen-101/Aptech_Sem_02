class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  startEngine() {
    console.log(`Engine Has Started`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`The Car is Driving`);
  }
}

class MotorCycle extends Vehicle {
  wheelie() {
    console.log(`The Motorcycle is performing a Wheelie`);
  }
}

class ElectricCar extends Car {
  startEngine() {
    console.log(`Electric Motor Has Started`);
  }
}

const vehicle1 = new Vehicle();
vehicle1.startEngine();

// Example OF polymorphism

const electricCar = new ElectricCar();
electricCar.startEngine();
electricCar.drive();
