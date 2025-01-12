// uncomment as you go to see if code is working as intended! 
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
  // TODO: DONE -- Declare properties of the Truck class
  // TODO: DONE -- The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: DONE -- The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

    // TODO: DONE -- Create a constructor that accepts the properties of the Truck class
    // TODO: DONE -- The constructor should call the constructor of the parent class, Vehicle
    // TODO: DONE -- The constructor should initialize the properties of the Truck class
    // TODO: DONE -- The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // Mar - my constructor will initialize properties of an object, parameters defined will allow values to be passed through
    constructor (
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      towingCapacity: number,
      wheels: Wheel[],
    ) {
      // chatted xpert about this and it told me to pass through all of the parameters to parent but aren't I only pulling in this.started and this.speed?
      // shouldn't i eventually make a new truck here -- or does the one on index.ts need to be imported?
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
      if (wheels.length !== 4) {
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      } else {
        this.wheels=wheels;
      }
  }
  }
  // TODO: DONE -- Implement the tow method from the AbleToTow interface
  // mar notes -- define a class that implements the interface, set up the necessary parameters and constructor. then implement method outside of the constructor and console log to check!
class towVehicle implements AbleToTow {
  towingCapacity: number;

  constructor (towingCapacity: number){
    this.towingCapacity = towingCapacity;
  }
  tow(vehicle: Truck) {
    console.log(`Has towing capacity of ${this.towingCapacity}`)
  }
}

    // TODO: NOT DONE!!!! Get the make an model of the vehicle if it exists
    // mar notes -- make is a string, can check if length > 0? OR can i call from new const truck1?
    if (this.make && this.model) {
      console.log (`Vehicle make is ${Vehicle.make} and model is ${Vehicle.model}`);
    }
    // TODO: NOT DONE!!! Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    if (vehicles..weight <= Vehicle.towingCapacity) {
      return `${Vehicle.make} is being towed`;
    } else {
      return `${Vehicle.make} truck is too heavy to be towed`;
    };
  
  // TODO: NOT DONE!!! Override the printDetails method from the Vehicle class
  //  TODO: The method should call the printDetails method of the parent class
  // Mar started -- notes: the parent class is Vehicle
  // again not sure how to access properties of truck - do I need to make a new truck?
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  
    override printDetails(): void {
      super.printDetails();
      console.log(`Truck details: Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}`);
      return `Truck details: Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}`; 
    }

    printDetails(Truck);

// Export the Truck class as the default export
export default Truck;
