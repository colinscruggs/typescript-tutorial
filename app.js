"use strict";
// DATATYPES
// string
var myName = 'Colin'; // TS will automatically save the fact that myName should be a string type
// myName = 21; will not compile
// number (can be integer or float, no type differentiation)
var myAge = 21;
// myAge = '21'; will not compile
// boolean
var hasHobbies = true;
// hasHobbies = 1; "truthiness" is not recognized when using different types (?)
// assign types
var myRealAge; // default type: any (vanilla JS variable)
myRealAge = 21;
// myRealAge = '21'; will not compile
// array
var hobbies = ["Producing music", "Skating"];
hobbies = [100];
// hobbies = 100; will not compile
// tuples: can define types of tuples with specified types
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // returns 100
myColor = Color.Blue;
console.log(myColor); // prints 101
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
