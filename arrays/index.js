var array = [1, 2, 3];
array.forEach(element => {
    console.log(element);
});

// // Filter array
// console.log(array.filter(function(value) {
//     return value > 2;
// }));

// New array
var newArray = array.map(function(value) {
    return value * 2;
});

console.log(newArray);


// // Inserts a new element at the back
// array.push(4);
// console.log(array);

// // Removes element at the back
// array.pop();
// console.log(array);

// // Removes element at the front
// array.shift();
// console.log(array);

// // Insert a new element at the front of the array
// array.unshift("new");
// console.log(array);

// // Change the element value in the array
// array[array.indexOf("new")] = "old";
// console.log(array);

// // Removes elements within the array
// var newArray = array.slice(0, 2);
// console.log(newArray);