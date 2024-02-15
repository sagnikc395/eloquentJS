function arrayToList(...array) {
  let list = { rest: null };
  for (let i = 0, c = list; i < array.length; i++) {
    c = c.rest = { value: array[i], rest: null };
  }
  console.log(list);
  return list.rest;
}

arrayToList([1, 2, 3, 4, 5]);
