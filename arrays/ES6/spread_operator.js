"use strict";

function addNumbers(a, b, c) {
  console.log(a + b + c);
}

let nums = [3, 4, 7];

// Spread operator assigns each element in the array to the parameter inside the function
addNumbers(...nums);

let meats = ["bacon", "ham"];
let food = ["apples", ...meats, "orange"];
console.log(food);
