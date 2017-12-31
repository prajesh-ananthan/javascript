const PI = 3.14;

function circleArea(r) {
  return PI * r * r;
}

// Arrow functions
let circleArea2 = r => {
  return PI * r * r;
};

// Arrow functions simplified
let circleArea3 = r => PI * r * r;

console.log(circleArea(7));
console.log(circleArea2(7));
console.log(circleArea3(7));

let name = "Prajesh";
console.log("My favorite person is " + name);
// Template literals
console.log(`My favorite person is ${name}`);
