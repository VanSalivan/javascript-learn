Array.prototype.exampleFilter = function (func) {

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return this[i]
    }
  }
}


const att = [1, 2, 3, 4, 5]

console.log(att.exampleFilter((item) => item < 5))