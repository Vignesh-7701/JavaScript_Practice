
// JavaScript has built-in symbols
// Example: Symbol.iterator

let numbers = [1,2,3];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

// Symbol.iterator defines how iteration works