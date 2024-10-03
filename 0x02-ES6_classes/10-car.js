class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

const car1 = new Car('Toyota', 'V8', 'Red');
const car2 = car1.cloneCar();

console.log(car1);
console.log(car2);
console.log(car1 === car2);
