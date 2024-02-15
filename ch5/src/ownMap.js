let SCRIPTS = [
  { name: "123", direction: "rtl" },
  { name: "456", direction: "ttl" },
];

function map(array, transform) {
  let mapped = [];
  for (let elem of array) {
    mapped.push(transform(elem));
  }
  return mapped;
}

let rtl = SCRIPTS.filter((s) => s.direction == "rtl");
console.log(map(rtl, (s) => s.name));
