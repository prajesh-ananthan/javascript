"use strict";

let movie = "The Lord of the rings";

function notebook() {
  let movie = "the notebook";
  return movie;
}

console.log(notebook());
console.log(movie);

function anotherFunction() {
  let isTrue = true;
  let quote = "Focus is Power";

  console.log("Before: " + quote);

  if (isTrue) {
    let quote = "Constant and Never Ending Purposeful Improvement";
    console.log("Inside: " + quote);
  }

  console.log("After: " + quote);
}

anotherFunction();
