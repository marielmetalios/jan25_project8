// uncomment as you go to see if code is working as intended! 
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js'
// import printDetails from './Vehicle.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
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
      wheels: Wheel[],
      towingCapacity: number,
    ) {
      // chatted xpert about this and it told me to pass through all of the parameters to parent but aren't I only pulling in this.started and this.speed?
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
      if (wheels.length !== 4) {
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      } else {
        this.wheels = wheels;
      }
    this.towingCapacity = towingCapacity;
  }
  // TODO: DONE -- Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const name = vehicle.make && vehicle.model
    ? `${vehicle.make} ${vehicle.model}`
    : 'Vehicle';
    console.log(`Has towing capacity of ${this.towingCapacity}`)
    if (this.weight <= this.towingCapacity) {
      console.log (`${name} is being towed`);
    } else {
      console.log(`${name} is too heavy to be towed`);
    }
  }

    // TODO: DONE -- Get the make and model of the vehicle if it exists
    // TODO: DONE -- Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: DONE -- If it is, log that the vehicle is being towed
    // TODO: DONE -- If it is not, log that the vehicle is too heavy to be towed
    
  
  // TODO: NOT DONE!!! Override the printDetails method from the Vehicle class
  //  TODO: The method should call the printDetails method of the parent class
  // Mar started -- notes: the parent class is Vehicle
  // again not sure how to access properties of truck - do I need to make a new truck?
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  
override printDetails(): void {
  super.printDetails();
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Color: ${this.color}`);
  console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  console.log(
    `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
  );
  console.log(
    `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
  );
  console.log(
    `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
  );
  console.log(
    `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
  );
}
}

// Export the Truck class as the default export
export default Truck;
