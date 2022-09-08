"use strict";

// Done !!!

const hex = {
  string: "#C0DE25", //number is an string and I need a number --> Use parseIn
};

typeOf();
function typeOf() {
  console.log("hex.string is a:", typeof hex.string);
}

//Clean string
cleanHexStr();
function cleanHexStr() {
  const number = hex.string.substring("1");
  console.log(number);

  // Divide HEX in three pars of numbers/letters
  const ab = number.substring(0, 2);
  const cd = number.substring(2, 4);
  const ef = number.substring(4, 6);
  console.log(ab, cd, ef);

  //Use those 3 values and convert them to 3 numbers for the RGB with parseInt

  const r = parseInt(ab, 16);
  console.log(r);

  const g = parseInt(cd, 16);
  console.log(g);

  const b = parseInt(ef, 16);
  console.log(b);

  //Add propertie to object hex

  const rgb = `rgb(${r}, ${g}, ${b})`;
  console.log(rgb);
  console.log(hex);

  dislpyColors(rgb); //rgb parameter make reference to rgb variable
}

function dislpyColors(color) {
  //color make reference to rgb parameter in the call function that at the same time make reference to the variable rgb
  document.querySelector(".hex").style.backgroundColor = hex.string;
  document.querySelector(".rgb").style.backgroundColor = color;
}
