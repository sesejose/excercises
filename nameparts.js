const str = "Peter Heronimous Lind"; //substring the full sentence has 20
const fullName = str.split(" ");

const firstName = fullName[0];
const middleName = fullName[1];
const lastName = fullName[2];

console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(firstName);
console.log(middleName);
console.log(lastName);

// Using indexOf and substring

const searchPeter = "Peter";
const searchHeronimous = "Heronimous";
const searchLind = "Lind";

const findFirstName = str.indexOf(searchPeter);
console.log("searchPeter:", findFirstName);

const findMiddleName = str.indexOf(searchHeronimous);
console.log("searchHeronimous:", findMiddleName);

const findLastName = str.indexOf(searchLind);
console.log("searchLind:", findLastName);

// Using substring

const peter = str.substring(0, 5);
console.log(peter);
