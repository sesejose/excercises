"use strict";

// Done !!!

cssRgb("rgb(192, 13, 1)"); //The call function has a string as parameter.

function cssRgb(str) {
  //str make reference to the string in the call function.
  //Cleaning the string --> Select the part in question, delete the commas, and split the spaces.
  const part = str.slice(4, 14); //Slice to keep the part we want from str (Just numbers)
  const rgb = part.replace(/,/g, ""); //Removes commas from slice.
  const spaces = rgb.split(" "); //Split all the spaces

  //Convert the substring to numbers.
  const rStr = spaces[0]; //From cero to first spaces.
  const gStr = spaces[1]; //From first to second spaces.
  const bStr = spaces[2]; //From second to thirht spaces.

  const r = parseInt(rStr); //Convert substrings to numbers
  const g = parseInt(gStr); //Convert substrings to numbers
  const b = parseInt(bStr); //Convert substrings to numbers

  //Log the variables with numbers.
  console.log(r, g, b);
  console.log("r:", r);
  console.log("g:", g);
  console.log("b:", b);

  //Typeof to see is they are numbers.
  console.log(typeof r);
  console.log(typeof g);
  console.log(typeof b);

  const css = str; // CSS is the parameter of the function, this is "str"
  const rgbColor = `rgb(${r}, ${g}, ${b})`; //rgbColor is the result of the conversion

  dislpayColors(css, rgbColor); //The call function uses thos 2 variables as parameters
}

function dislpayColors(unoColor, dosRgb) {
  //These parameters make reference to the parameters in the call function
  document.querySelector(".css").style.backgroundColor = unoColor;
  document.querySelector(".rgb").style.backgroundColor = dosRgb;
  console.log(unoColor);
  console.log(dosRgb);
}
