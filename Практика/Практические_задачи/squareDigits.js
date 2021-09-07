function squareDigits(num) {
  const result = String(num).split('').reduce((total, currentItem) => {
    total.push(currentItem * currentItem)

    return total
  }, [])
  

  return Number(result.join(''))
}