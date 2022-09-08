"use strict";

// Done !!!

const rgb = {
  //Object with properties and numbers as values.
  r: 110,
  g: 120,
  b: 130,
};

rgbHex(rgb); //Calling function

function rgbHex(object) {
  const rRed = object.r.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(rRed);

  const gGreen = object.g.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(gGreen);

  const bBlue = object.b.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(bBlue);

  //   if (object.b.length < 2) {
  //     bBlue = "0" + bBlue;
  //   }

  //Log HEX

  const hex = `#${rRed}${gGreen}${bBlue}`; //String to for the HEX number
  console.log(hex);

  const rgb = `rgb(${object.r},${object.g},${object.b})`; // This rgb is different from the object in the top. It is a variable with a string as value. And that string takes the properties and values from the object.

  dislpayColors(hex, rgb); //The call function has 2 parameters that make reference to the variables above.
}

function dislpayColors(uno, dos) {
  //Uno make reference to the first parameter, and dos make reference to the second parameter in the call function!
  document.querySelector(".hex").style.backgroundColor = uno;
  document.querySelector(".rgb").style.backgroundColor = dos;
  console.log(uno);
  console.log(dos);
}
