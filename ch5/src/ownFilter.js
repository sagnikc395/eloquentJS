let SCRIPTS = [
  {
    name: "Adlam",
    living: true,
  },
  {
    name: "Elizabeth",
    living: false,
  },
];

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, (script) => script.living));

// better yet using the inbuilt method
console.log(SCRIPTS.filter((item) => item.living));
