function arrayDiff(a, b) {
  let result = a.reduce((accumulator, currentItem, index) => {
    if (!b.includes(a[index])) {
      accumulator.push(currentItem)
    }
    
    return accumulator

  }, []);

  return result
}


console.log(arrayDiff([], [4, 5])) // [4,5] a was [], b was [4,5]
console.log(arrayDiff([3, 4], [3]))  // [4] "a was [3,4], b was [3]"
console.log(arrayDiff([1, 8, 2], []))  // [1,8,2]
console.log(arrayDiff([1, 2, 2], [2, 2])) // a was [1,2,2], b was [2]