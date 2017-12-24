// Closures
function generator(input) {
  var number = input;
  return function() {
    return number * 2;
  };
}

var calc = generator(3);
console.log(calc());
