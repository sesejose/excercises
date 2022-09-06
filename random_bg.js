"use strict";

// Missing !!!

const background = document.querySelector("body");

function randomBackground() {
  const object = randomColor(rgb); //This is the object that randomBackground needs
}

function randomColor(color) {
  const r = Math.random(0, 255);
  const g = Math.random(0, 255);
  const b = Math.random(0, 255);

  return { r, g, b }; //Object
}

//***************************** */

// function toCss() {}

//**************************** */

// function retunCss(str) {
//   //Removes commas
//   const removeCommas = str.replace(/,/g, "");
//   console.log(removeCommas);

//   const selectCommas = removeCommas.split(" ");
//   const r = selectCommas[0];
//   console.log(r);
//   const g = selectCommas[1];
//   console.log(g);
//   const b = selectCommas[2];
//   console.log(b);

//   return;
// }
// const css = retunCss("192, 5, 42");
