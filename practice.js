function* gen(){
  let result = yield "2+2 = ?";
  console.log(result);
}

const value = gen();

value.next(4);
console.log(value.next().value);

