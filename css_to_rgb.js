"use strict";

// Done !!!

cssRgb("rgb(192, 13, 1)"); //The call function has a string as parameter.

function cssRgb(str) {
  //str make reference to the string in the call function.
  const part = str.slice(4, 14); //Slice to keep the part we want from str (Just numbers)
  const rgb = part.replace(/,/g, ""); //Removes commas from slice.
  const spaces = rgb.split(" "); //Split all the spaces

  //Convert the substring to numbers.
  const rStr = spaces[0]; //From cero to first spaces.
  const gStr = spaces[1]; //From first to second spaces.
  const bStr = spaces[2]; //From second to thirht spaces.

  const r = parseInt(rStr);
  const g = parseInt(gStr);
  const b = parseInt(bStr);

  //Log the variables with numbers.
  console.log(r, g, b);
  console.log("r:", r);
  console.log("g:", g);
  console.log("b:", b);

  //Typeof to know what type of data it is.
  console.log(typeof r);
  console.log(typeof g);
  console.log(typeof b);

  // return str;
}
