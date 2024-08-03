
// console.log("hello");



//  Q1. what is the posiable ways to create objects in js

//  there are many ways to create objects in js as mentioned below

// 1. object literals syntax...................................................

// var Objects = {
//     name: "karan",
//     Age: "22"
// };

// console.log( Objects.name );

// 2. object costructor....................................................

//  the simplest wayt o create a empty object using the object constructor

// const object = Object();


// object.name="karan"
// console.log(object);


// 3. function construtor .....................................................

// function Person(name) {
//   this.name = name;
//   this.age = 21;
// }
// var object = new Person( "Sudheer" );

// console.log(object);
// console.log(object.name);

// 4. Function constructor with prototype:

// function Person() {}
// Person.prototype.name = "Sudheer";
// var object = new Person();


// ES6 class syntax:

// ES6 introduce class feature to create objects

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// var object = new Person("Sudheer");






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q2.
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.slice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice( 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

console.log(arrayIntegers3);
console.log(arrayIntegersOriginal3);
