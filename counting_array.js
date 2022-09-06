"use strict";

// Done !!!

// Code from Jeppe

// let counterArray = [];
// let counter = 0;

// loop();

// function loop() {
//   if (counter < 50) {
//     counter++;
//     //console.log(counter);
//     if (counterArray.length >= 9) {
//       counterArray.shift();
//     }
//     counterArray.push(counter);
//     console.log(counterArray);

//     setTimeout(loop, 1000);
//   }
// }

//////////////////////////////////

// Me :)

let array = [];
let counter = 0;

function loop() {
  if (counter < 20) {
    counter++;
    // array.unshift(counter); //Unshift that add items to the begining was not necessary !!!

    if (array.length >= 9) {
      array.shift(); //Stracts an item from the begining
    }

    array.push(counter); //Add the value of counter (an item) to the end
    console.log("Array", array);

    setTimeout(loop, 1000);
  }
}

loop(); // It call the function (Init Loop Pattern !)
