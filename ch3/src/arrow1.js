// arrow functions in js

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

//empty param arrow function
const horn = () => {
  console.log("Toot");
};

//single param arrow function
const sq = (x) => x * x;
