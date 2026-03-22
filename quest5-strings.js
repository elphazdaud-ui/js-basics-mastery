"use strict";
const title = document.getElementById("title");
console.log(title);
/*--------how to change the content---------*/

title.textContent =
  "Mr elphaz is very frustrated about learning how to code properly";
/* --------change the style--------------*/

title.style.textDecoration = "green";
/*--------- how to create elements-------*/

const paragraph = document.createElement("p");
paragraph.textContent = "He finally knew how to learn code in a nice way!";
const button = document.createElement("button");
button.textContent = "Click";
/*--------appendChild() function launch the paragraph on the page or Document.----------*/

document.body.appendChild(paragraph);
document.body.appendChild(button);
//text decoration

paragraph.style.color = "green";
paragraph.style.textAlign = "center";
/*------------- HANDLE events {this is how Apps Respond to users!}----------------*/

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("are you sure?");
  paragraph.textContent = "finally breakthrough!!!!";
});
/*--------- REAL DEV FLOW!-------*/
