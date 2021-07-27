Array.prototype.exampleMap = function (func) {
  const resoultArray = []

  for (let i = 0; i < this.length; i++) {
    resoultArray.push(func(this[i], i, this))
  }

  // this.forEach((item, index) => {
  //   resoultArray.push(func(item, index, this))
  // })

  return resoultArray;
}

const att = [1, 2, 3, 4, 5]

console.log(att.exampleMap((item, index) => item + index))
