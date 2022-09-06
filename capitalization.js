"use strict";

// Done !!!

// Exercise - Capitalization function

capitalize("name");
//This call function has a parameter (that is an string) that ...
//Then in the function it would be the parameter to use!

function capitalize(str) {
  //Here str is name
  //   const myStr = `This is my name to capitalize`;
  //   console.log(myStr);

  //   const select = myStr.substring(11, 12);
  //   const cap = select.toUpperCase();

  console.log(str);

  const newStr = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase(); //Example of multiple strings methods.
  console.log(newStr);
  console.log(`My new string here: ${newStr}`);
}

//*********************************************** */

// Exercise - Name-parts function

// const myName = "José Francisco Sesé";

// getNameParts("José Francisco Sesé");

// function getNameParts(fullname) {
//   console.log();
//   const split1 = fullname.split(" ");
//   const firstName = split1[0];
//   console.log(firstName);

//   const split2 = fullname.split(" ");
//   const middleName = split2[1];
//   console.log(middleName);

//   const split3 = fullname.split(" ");
//   const lastName = split2[2];
//   console.log(lastName);

//   console.log(firstName, middleName, lastName);
// }

//*************************************************** */

// Exercise - FullName function

const firstName = "José";
const middleName = "Francisco";
const lastName = "Sesé";

fullname(lastName, firstName, middleName);

function fullname() {
  console.log(`${firstName} ${middleName} ${lastName}`);
}
