"use strict";

// Done !!!

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let someletters = letters[4];
let otherletters = letters[7];

console.log(letters);
console.log(someletters);
console.log(otherletters);

//*******************************

//Changing a letter of the array letters (line: 3)

console.log(letters[4]);
const newarray = letters; //newarray is equal to the entire array
newarray[4] = "new letter"; //the letter 4 of the new array now is an *
console.log(letters[4]); //Check
console.log(newarray); //Check

//Nothing change if I use const insted of let
//Yes, it's posible to change one of the arrays without chaging the others.
//Why not, why???

//******************************

// We already know methods that add and remove items from the beginning or the end:

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

//Push
const people = ["Harry", "Ron", "Hermione"];
let result; // An empty variable to store the result
result = people.push("Draco"); //Add Draco at the end of people array // Result is equal to people array + Draco at the end.
console.log("result:", result); // result is [4] the index of Draco in the array when push??
console.log("array:", people); // Draco is in people now.

//Pop
result = people.pop("Draco"); //
console.log("result:", result); // result is the name Draco when pop ??
console.log("array:", people); // Draco was removed from people.

//*****************************

//Slice
let arrSlice = ["cero", "one", "two", "three"];
let threeIsOut;
threeIsOut = arrSlice.slice(0, 3); //Slice from 0 to 3 => it keeps that range: 0, 1, 2 but not three
console.log("array:", arrSlice);
console.log("result:", threeIsOut);

//*****************************

//Splice
let arrSplice = ["cero", "one", "two", "three"];
let test;
test = arrSplice.slice(0, 3); //Slpice does the same that Slice?? Keeps from the items that we indicates (0, 3)?
console.log("array:", arrSplice);
console.log("result:", test);

//*****************************

//Splice (New one)
let arr = ["cero", "one", "two", "three"];
let check;
check = arr.splice(check, 4); //Here we print the items that we indicates with the number (counts from begining).
console.log("array:", arr);
console.log("result:", check);

//*****************************

//It replaces the item in [1], just we did with newarray (line 18, 20)
people[1] = "Ginny";
console.log(people);

//*****************************

//Split
//Try something with Split later !!!

///////////////////////////////

//indexOf
let arrIndex = ["index1", "index2", "index3", "index4"];
let index;
index = arrIndex.indexOf("index5"); //IndexOf ??
console.log("array:", arrIndex);
console.log("result:", index);

//******************************

//Counting array Notes

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.
