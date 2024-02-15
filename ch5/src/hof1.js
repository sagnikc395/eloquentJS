//higher order functions that create new functions

function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// can also have functions that change other functions

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with ", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);

//similarly we can even write functions that provide new types of control flow

function unless(test, then) {
  if (!test) then();
}

const repeat = (items, action) => items.forEach((item) => action(item));

repeat([1,2,3,4,5,6,7,8,9,10], (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
