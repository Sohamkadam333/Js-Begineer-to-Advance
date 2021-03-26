// Reading
/*
Object Types (Blueprints) (Classes)
The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword:
*/

function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.nationality = "English";
        // adding method to constructor
        this.fullName = function () {
                return `${this.firstName} ${this.lastName}`;
        };

        // getsMarries
        this.getsMarried = function (newLastName) {
                this.lastName = newLastName;
        }
}


const john = new Person('john', 'doe', 33, 'blue');
console.log(john);

// adding property to an object
john.nationality = 'en';
console.log(john);

// adding method to an objetc
john.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
}
console.log(john.fullName());


// adding property to constructor -- property must be addes in cunstructor only
console.log(Person);

const marry = new Person('marry', 'smith', 40, 'black');
console.log(marry);
console.log(marry.fullName());

// marry gets married
marry.getsMarried('lorem');
console.log(marry.fullName());