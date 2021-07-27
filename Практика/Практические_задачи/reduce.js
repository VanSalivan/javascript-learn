Array.prototype.reduceExample = function (func, init) {
  let initialState = init;
  let i = 0;
  
  if (init === undefined) {
    initialState = this[0]
    i = 1;
  }

  for (i; i < this.length; i++) {
    console.log(initialState)
    initialState = func(initialState, this[i], i, this)
  }

  return initialState
}

const att = [1, 2, 3, 4, 5, 6]


// console.log(att.reduce((prevValue, value) => prevValue + value))
console.log(att.reduceExample((total, currentValue) => total + currentValue, 0))
