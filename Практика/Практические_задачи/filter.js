Array.prototype.exampleFilter = function (func) {
  const resoulArray = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      resoulArray.push(this[i])
    }
  }

  return resoulArray
}


const att = [1, 2, 3, 4, 5]

console.log(att.exampleFilter((item) => item < 5))