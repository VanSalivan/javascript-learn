Array.prototype.everyExample = function (func) {

  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) {
      return false
    }
  }
  
  return true;
}


const att = [10, 20, 30, 40, 50];


console.log(att.everyExample((item) => item > 8))
// console.log(att.every((item) => item < 6))