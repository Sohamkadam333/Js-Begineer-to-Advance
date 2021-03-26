// Reading
/*
Class Inheritance
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class
*/
// class example
class Car {
        constructor(brand) {
                this.brand = brand;
        }
        present() {
                return `I have a ${this.brand}`;
        }
}

class Model extends Car {
        constructor(brand, mod) {
                super(brand);
                this.model = mod;
        }
        show() {
                return `${this.present()}, it is a ${this.model}`;
        }
}

const myCar = new Model('BMW', 'X7');
console.log(myCar);
console.log(myCar.show());

// example 2 getters and setters methods
class Car1 {
        constructor(brand) {
                this.brand = brand;
        }

        get carName() {
                return this.brand;
        }

        set carName(newBrand) {
                this.brand = newBrand;
        }
}

const myNewCar = new Car1('BMW2');
console.log(myNewCar.carName);

myNewCar.carName = 'FORD';
console.log(myNewCar.carName);
