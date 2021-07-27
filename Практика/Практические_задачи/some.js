Array.prototype.someExample = function (func) {

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return true
    }
  }
  
  return false
}


const att = [10, 20, 30, 40, 50];


console.log(att.someExample((item) => item === 10))
// console.log(att.some((item) => item === 6))