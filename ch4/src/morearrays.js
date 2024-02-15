let todoList = [];
function remember(task) {
  todoList.push(task);
}

//get the first task
function getTask() {
  return todoList.shift();
}

function rememberNow(task) {
  return todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

//slice

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4, 5].slice(2));

//concat and slice

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
