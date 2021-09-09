const factorial = (number) => {
  return Array.from({ length: number }, (item, index) => index + 1)
    .reduce((total, currentItem) => {
      total = total * currentItem

      return total
    })
}

console.log(factorial(10))