// DATATYPES
// string
let myName = 'Colin'; // TS will automatically save the fact that myName should be a string type
// myName = 21; will not compile

// number (can be integer or float, no type differentiation)
let myAge = 21;
// myAge = '21'; will not compile

// boolean
let hasHobbies = true;
// hasHobbies = 1; "truthiness" is not recognized when using different types (?)

// assign types
let myRealAge: number; // default type: any (vanilla JS variable)
myRealAge = 21;
// myRealAge = '21'; will not compile

// array
let hobbies: any[] = ["Producing music", "Skating"];
hobbies = [100];
// hobbies = 100; will not compile

// tuples: can define types of tuples with specified types
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Red, // 0
    Green = 100, // 100
    Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor); // prints 100
myColor = Color.Blue;
console.log(myColor); // prints 101

// any: most flexible variable type in TS
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);