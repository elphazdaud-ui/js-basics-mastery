"use strict";
var firstName = "elphaz";
var surname = "Thomas";
let age = 25;
let hobby = " Software Technologies and Singing";
const citizenship = "Tanzania";
const Married = true;
console.log("full name is :", firstName + " " + surname);
// Global variable
function demoVar() {
  var address = "Mwanza , Tanzania";
  console.log(firstName);
  console.log(address);
}

demoVar(); //it will execute elphaz as firstName and Mwanza Tanzania as an address.
// so variables declared using var are global.
// but var address wont be accessible outside the function.
const marks = [78, 98, 43, 22, 58, 89, 76, 90]; // variables declared using "const" are immutable means cant be changes or re-assigned
