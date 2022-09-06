"use strict";

function greeting(theName) {
  //The parameter of the function is defined in the function greeting in the const newStr and ...
  // ... the important is that it would retunr the value in that const !!! The const that have the call function.
  return `Hello ${theName}`;
}

const newStr = greeting("José");

console.log("message 1:", newStr);
console.log("message 2:", greeting("PETER").toLocaleLowerCase());
console.log("message 3:", greeting("josé").toUpperCase());

//************************************ */

// The function is called in a console.log . It works fine!
console.log(greeting("Lucas")); //It logs Lucas because that is the parameter the function uses and return here !!!!

//************************************ */

// A function Called inside a template literal also works!
const text = `Greeting is ${greeting("José Francisco Sesé")}`;
console.log(text); //And returns the value right here or wherever I invoque the const that has the the function(parameter).

//************************************ */

function myFunc(name) {
  const cap = name.substring(0, 1).toUpperCase();
  console.log(cap);
  const rest = name.substring(1, 4);
  return `Capitalize ${cap}${rest}`; //Always write RETURN inside the function
}

const returnValue = myFunc("josé");
console.log(returnValue);

//************************************ */

function fullName(firstName, middleName, lastName) {
  // const fullName = `Here ${firstName} ${middleName} ${lastName}`;
  return `My fullname is: ${firstName} ${middleName} ${lastName}`;
}

const returnFullName = fullName("José", "Francisco", "Sesé");
console.log(returnFullName);

//******************************************************************* */

//Peter's code

let theNumber = 2;

function multiplyBySelf(number) {
  return number * number;
}

theNumber = multiplyBySelf(42); //it would be returned here at the first place "0" in the line.
console.log("The number:", theNumber);

//****************************************************************** */

//Return with MULTIPLE VALUES
//I need to retun an OBJECT !!!

function returnMultimpleValues() {
  const value1 = "1";
  const value2 = "2";
  const value3 = "3";

  return { value1, value2, value3 }; //OBJECT
}

const pasteReturn = returnMultimpleValues().value2;
console.log(pasteReturn);
