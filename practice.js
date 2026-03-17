
// JavaScript has built-in symbols
// Example: Symbol.iterator

/*let numbers = [1,2,3];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());



function greet(a, b){
    console.log(greet.name);
    console.log(greet.length);
}

greet(1,2);


function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

// function property version
function makeCounter2() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  return counter;
}

let c1 = makeCounter1();
let c2 = makeCounter2();

c1();
console.log(c1()); // 0
console.log(c2()); // 0

*/

function main(){}

main.helper = function(){
    console.log("helper");
}

main.helper();