"use strict";
const name = "Calvin";
const surname = "Thomas";
const fullName = name + " " + surname; //string concatenation
console.log(fullName);
let occupation = "ENGINEER";
let age = 34;
const profile = `${fullName} is ${age} years old ${occupation} `; //template literal
console.log(profile);
// toUpperCase() convert str from lowercase to upper case
let newName =
  "my name is elphaz thomas working at nothern america as a software engineer!".toUpperCase();
console.log(newName);
// toLowerCase() convert str from upper to lower case
newName = "I LIKE NAILING IT UNTIL IT ALIGNS NO MERCY".toLowerCase();
console.log(newName);
let length = newName.length;
console.log(`this is the length of our string : ${length}`);
