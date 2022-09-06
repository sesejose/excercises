"use strict";

const firstName = "José";
const middleName = "Francisco";
const lastName = "Sesé";

// 1 . Function called on an earlier line
// sayHello();

// function sayHello() {
//   const firstName = "Peter"; // 3 .
//   console.log(`Hello ${firstName}`);
// }

// 2. Function called with a variable
// const myName = sayHello();

// 3 . If the function has a variable inside and outside the function with the same name it still works.
//But it recognize the variable inside the function.

// 4 . If there is no parameters it wuld be undfeined.

// 5 . Nothing - It does not care if there are two parameters or one.
// sayHello(firstName, lastName);

// 6 .
// sayHello(lastName, firstName);

//*********  Excercise present Pet   ***********************//
const myName = "José";
const petType = "dog";
const petName = "ketchup";

// presentPet();

const strCall = presentPet();

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${myName} ${middleName} ${lastName}, I have a ${petType} called ${petName}`);
}

//Functions Excercise 2b

//Parameters need to be in the right order !!

//When we use the same name for parameters than variables outside the function these would be undefined.
// The variables need to be diferent from the parameters - if not shows undefined.

// 3 . function called with strings?? How it is? Can you show us examples?

let name1 = "Name1";
funct2("name2");
function funct2(name1) {
  console.log(name1);
}

//With the next one I am changing the name of the global variable inside the function.
let global = "Frank";
funct();
function funct() {
  global = "Other";
  console.log(global);
}

//
