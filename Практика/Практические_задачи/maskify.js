function maskify(cc) {
  let arrayWithFirstNumbers = [...cc].reverse().map((item, index) => {
    if (index > 3) {
      return '#'
    }

    return item
  })

  return arrayWithFirstNumbers.reverse().join('')
}

console.log(maskify("4556364607935616")) // "############5616"
console.log(maskify("64607935616")) //      "#######5616"
console.log(maskify("1")) //                "1"
console.log(maskify("")) //                 ""