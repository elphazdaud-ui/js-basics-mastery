"use strict";

const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
addBtn.addEventListener("click", function () {
  const todoText = input.value.trim();
  if (todoText === "") {
    alert("You haven't add any!!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🚮";

  deleteBtn.addEventListener("click", function () {
    alert("are you sure you want to delete?");
    list.removeChild(li); //older version
    /*li.remove*/ //is a modern version */
  });

  li.append(deleteBtn); //list.appendChild() is an old version// old school
  list.append(li);
  input.value = "";
});
