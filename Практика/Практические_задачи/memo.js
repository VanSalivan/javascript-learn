function memo(fn) {
  let cache;
  let prevArg = 0;

  return function (...arg) {
    if (arg.length === prevArg.length) {
      if (arg.every((item, index) => item === prevArg[index])) {
        return cache
      }
    }

    prevArg = arg;
    return cache = fn(...arg)
  }
}

function sum(a, b) {
  return a + b
};


const example = memo(sum);
console.log(example(10, 15))
console.log(example(10, 15))