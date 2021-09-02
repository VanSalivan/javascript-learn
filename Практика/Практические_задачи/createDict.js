function createDict(keys, values) {
  let result = keys.reduce((total, currentItem, index) => {
    if (values[index] === undefined) {
      total[currentItem] = null
    } else {
      total[currentItem] = values[index]
    }
    return total
  }, {})

  return result
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4])) // {'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd':null}