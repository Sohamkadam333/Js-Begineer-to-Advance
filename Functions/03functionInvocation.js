// Reading
/*
The code inside a JavaScript function will execute when "something" invokes it.

Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.
*/

// invoking a function as a function
function myFunction(a, b) {
        return a * b;
}
console.log(myFunction(8, 19));

/*
The function above does not belong to any object. But in JavaScript there is always a default global object.

In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.

In a browser the page object is the browser window. The function above automatically becomes a window function.

myFunction() and window.myFunction() is the same function:
*/
console.log(window.myFunction(8, 19));


// this in flobal object
function myFunction1() {
        return this;
}
console.log(myFunction1());

// Invoking a function as a Method
const myObject = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
                return this.firstName + " " + this.lastName;
        }
}
myObject.fullName();  // returns john doe

var myObject1 = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
                return this;
        }
};
myObject1.fullName();          // Will return [object Object] (the owner object)

// invoking function with function cunstructor
function myfunction2(first, last) {
        this.firstName = first;
        this.lastName = last;
}

const john = new myfunction2('john', 'doe');
console.log(john.firstName);