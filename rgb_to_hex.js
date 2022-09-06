"use strict";

// Done !!!

const rgb = {
  //Object with properties and numbers as values.
  r: 186,
  g: 218,
  b: 85,
};

rgbHex(); //Calling function

function rgbHex() {
  const rRed = rgb.r.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(rRed);

  const gGreen = rgb.g.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(gGreen);

  const bBlue = rgb.b.toString(16); // r is the property of rgb --> toString converts to HEX
  console.log(bBlue);

  //   if (object.b.length < 2) {
  //     bBlue = "0" + bBlue;
  //   }

  //Log HEX

  const hex = `#${rRed}${gGreen}${bBlue}`; //String to for the HEX number
  console.log(hex);
}
