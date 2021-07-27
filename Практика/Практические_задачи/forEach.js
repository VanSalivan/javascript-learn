Array.prototype.forEachExample = function (func) {

  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this)
  }
}

const att = [1, 2, 3, 4, 5]

att.forEachExample((item) => console.log(item * 3))