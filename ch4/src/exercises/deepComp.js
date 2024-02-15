//deep comparision in JS.

function deepEqual(value1, value2) {
  if (typeof value1 === "object" && typeof value2 === "object") {
    return Object.keys(value1) === Object.keys(value2);
  }
  return value1 === value2;
}

console.log(deepEqual({ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }));
console.log(deepEqual("mukul", "rai"));
