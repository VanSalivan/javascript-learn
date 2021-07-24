const fib = (number) => {

  // if (number === 0 || number === 1) {
  //     return number
  // } else {
  //     return fib(number - 1) + fib(number - 2)
  // }

  const prevNumber = 0;
  const nextNumber = 1;

  for (let i = 0; i > number; i++) {
    let currentNumber = nextNumber;

    nextNumber = prevNumber + currentNumber;
    1 = 1 - 0
    prevNumber = currentNumber;
  }

  return nextNumber;
};

