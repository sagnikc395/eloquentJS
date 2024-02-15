let object2 = { left: 1, right: 2 };
console.log(object2.left);

delete object2.left;

console.log(object2.left);
console.log("left" in object2);

console.log(Object.keys({ x: 0, y: 1, z: 2123 }));

let objA = { a: 1, b: 2 };
Object.assign(objA, { b: 3, c: 4 });
console.log(objA);
