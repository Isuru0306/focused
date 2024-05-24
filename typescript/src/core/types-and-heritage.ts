interface Vehicle {
  maxSpeed: number;
  brand: string;
}

type Car = {
  horsePower: number;
} & Vehicle;

type Boat = {
  sails: number;
} & Vehicle;

let car: Car;
let boat: Boat;
