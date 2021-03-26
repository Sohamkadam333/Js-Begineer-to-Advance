function Person(first, last, age, eye) {
        this.firstname = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
}

const john = new Person('john', 'doe', 30, 'blue');
console.log(john);

Person.prototype.nationality = 'English';

Person.prototype.fullName = function () {
        return `${this.firstname} ${this.lastName}`;
}

console.log(john);
console.log(Person.prototype);
console.log(john.fullName());
const keys = Object.keys(john);
console.log(keys);