function range(start, end, step) {
  let arr = [];
  if (step) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

function rangesum(arr) {
  return arr.reduce((curr, next) => curr + next, 0);
}
