// reading
/*
Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.
*/

class Car {
        constructor(name) {
                this.name = name;
        }
        static hello() {
                return "Hello!!";
        }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.