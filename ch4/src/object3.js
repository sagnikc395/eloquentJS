//arrays and objects

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "caulifolower",
      "lasagna",
      "touched tree",
      "burshed teeth",
    ],
    squirrel: false,
  },
];

//mutability ,deep copying and shallow copying
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);
