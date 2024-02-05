let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}

//y is inviible here
console.log(x + z);

const halve = function (n) {
  //n is local to this scope and we can only see this
  return Math.floor(n / 2);
};

let n = 12.133;
console.log(halve(n));
console.log(n);
