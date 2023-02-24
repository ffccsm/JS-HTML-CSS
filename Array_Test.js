// create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// get the index value from the user via prompt
const index = prompt("Enter an index value:");

// convert the user input to a number
const numIndex = parseInt(index);

// access the array element at the specified index
const element = numbers[numIndex];

// log the element to the console
console.log(`The element at index ${numIndex} is ${element}.`);
