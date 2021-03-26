// Reading

/*
JavaScript Accessors (Getters and Setters)
ECMAScript 5 (2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties).
*/


//JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.

// JavaScript Setter(The set Keyword)
// This example uses a lang property to set the value of the language property.

// function is accessed by objectName.functionName() as method;
// get is accessed by objectName.propertyName as Property;


// Why Using Getters and Setters?
/*
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind - the - scenes
*/


const person = {
        firstName: 'john',
        lastName: 'doe',
        age: 30,
        eyeColor: 'blue',
        language: 'en',
        fullName: function () {
                return this.firstName + " " + this.lastName;
        },
        get lang() {
                return this.language;
        },
        set lang(lang) {
                this.language = lang;
        }
};

console.log(person.lang);
person.lang = 'in';
console.log(person.lang);


