Array.prototype.exampleJoin = function (separation) {
  let resoultString = ''
  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      resoultString = resoultString + `${this[i]}`
    } else {
      resoultString = resoultString + `${separation}${this[i]}`
    }
  }

  return resoultString
}

const att = [1, 2, 3, 4, 5]


console.log(att.exampleJoin('+'))


// console.log(att.join('+'))

