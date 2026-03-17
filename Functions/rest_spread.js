/*****************************************
 REST PARAMETERS & SPREAD - COMPLETE NOTES
******************************************/

/*
"..." → can mean 2 things:
1. Rest parameter → collects values
2. Spread syntax → expands values

KEY DIFFERENCE:
- Rest → gather into array
- Spread → break array into values :contentReference[oaicite:0]{index=0}
*/


/*********************************
1. REST PARAMETERS (...args)
**********************************/

// collects all arguments into array
function sumAll(...args) {
  let sum = 0;

  for (let num of args) {
    sum += num;
  }

  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // 10

/*
cmt:
- ...args → gathers all remaining arguments into array
- args = [1,2,3,4]
- useful when number of arguments unknown :contentReference[oaicite:1]{index=1}
*/


/*********************************
2. MIX NORMAL + REST
**********************************/

function showName(firstName, lastName, ...titles) {
  console.log(firstName, lastName);
  console.log(titles);
}

showName("Julius", "Caesar", "Consul", "Emperor");

/*
cmt:
firstName = "Julius"
lastName = "Caesar"
titles = ["Consul", "Emperor"]

👉 rest always must be LAST parameter :contentReference[oaicite:2]{index=2}
*/


/*********************************
3. INVALID USAGE
**********************************/

// ❌ ERROR
// function test(a, ...rest, b) {}

/*
cmt:
- rest should be last
- because it collects "remaining" values
*/


/*********************************
4. ARGUMENTS OBJECT (OLD WAY)
**********************************/

function oldWay() {
  console.log(arguments);
  console.log(arguments[0]);
}

oldWay(10, 20);

/*
cmt:
- arguments = array-like object
- NOT real array (no map, filter etc)
- used before ES6 :contentReference[oaicite:3]{index=3}
*/


/*********************************
5. ARROW FUNCTION NOTE
**********************************/

function outer() {
  let arrow = () => console.log(arguments[0]);
  arrow();
}

outer(99);

/*
cmt:
- arrow functions DO NOT have arguments
- they take from outer function :contentReference[oaicite:4]{index=4}
*/


/*********************************
6. SPREAD SYNTAX (...arr)
**********************************/

let arr = [3, 5, 1];

// ❌ wrong
console.log(Math.max(arr)); // NaN

// ✅ correct
console.log(Math.max(...arr)); // 5

/*
cmt:
- spread expands array into values
- Math.max(3,5,1) internally :contentReference[oaicite:5]{index=5}
*/


/*********************************
7. MULTIPLE ARRAYS
**********************************/

let arr1 = [1, 2, 3];
let arr2 = [8, 9, 10];

console.log(Math.max(...arr1, ...arr2)); // 10

/*
cmt:
- multiple spreads allowed
*/


/*********************************
8. COMBINE WITH NORMAL VALUES
**********************************/

console.log(Math.max(0, ...arr1, 100)); // 100

/*
cmt:
- spread + normal values together
*/


/*********************************
9. MERGE ARRAYS
**********************************/

let merged = [...arr1, ...arr2];

console.log(merged); // [1,2,3,8,9,10]

/*
cmt:
- easiest way to merge arrays
*/


/*********************************
10. STRING TO ARRAY
**********************************/

let str = "Hello";

console.log([...str]); // ["H","e","l","l","o"]

/*
cmt:
- spread works on iterables (string, array, etc) :contentReference[oaicite:6]{index=6}
*/


/*********************************
11. ARRAY.FROM VS SPREAD
**********************************/

let s = "Hi";

console.log([...s]);
console.log(Array.from(s));

/*
cmt:
- both convert iterable → array
- difference:
  Array.from → works on array-like also
  spread → only iterable :contentReference[oaicite:7]{index=7}
*/


/*********************************
12. COPY ARRAY
**********************************/

let original = [1, 2, 3];
let copy = [...original];

original.push(4);

console.log(original); // [1,2,3,4]
console.log(copy);     // [1,2,3]

/*
cmt:
- shallow copy
- different reference
*/


/*********************************
13. COPY OBJECT
**********************************/

let obj = { a: 1, b: 2 };

let objCopy = { ...obj };

obj.c = 3;

console.log(obj);      // {a:1,b:2,c:3}
console.log(objCopy);  // {a:1,b:2}

/*
cmt:
- same concept as Object.assign
- cleaner syntax
*/


/*********************************
14. QUICK IDENTIFICATION
**********************************/

/*
REST:
function fn(...args) {}  → collecting

SPREAD:
fn(...arr)               → expanding

👉 easy trick:
- inside function params → REST
- everywhere else → SPREAD :contentReference[oaicite:8]{index=8}
*/


/*********************************
15. FINAL SUMMARY
**********************************/

/*
REST (...):
✔ collects values
✔ used in function parameters
✔ gives array

SPREAD (...):
✔ expands values
✔ used in function calls, arrays, objects
✔ works on iterables

Both use same syntax but opposite behavior
*/