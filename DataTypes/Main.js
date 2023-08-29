//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

//Numbers:

let length = 16;
let weight = 7.5;

//Strings
let color = "blue";
let myName= "hsyn";

//Booleans

let isTrue = true;
let isFalse = false;

//Object
const person = {firstName:"Hsyn", lastName:"Taşdemir"};

//Array Object
const cars = ["Porsche", "Volvo", "Audi"];

//BigInt
let x = BigInt("123456789012345678901234567890");

//You can use the JavaScript typeof operator to find the type of a JavaScript variable.
let tip = typeof "Hüseyin Taşdemir";
typeof 0              // Returns "number"
typeof 3.14           // Returns "number"
typeof (3 + 4)        // Returns "number"

//Undefined
//In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let car;
console.log(typeof car);