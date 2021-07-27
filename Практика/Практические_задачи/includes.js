Array.prototype.includesExample = function (parametr) {

  for (let i = 0; i < this.length; i++) {
    if (this[i] === parametr) {
      return true
    }
  }

  return false
}

const att = [10, 20, 30, 40, 50];

console.log(att.includesExample(50))
