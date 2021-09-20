function between(a, b) {
  return Array.from({ length: (a < 0) ? +String(a).substr(1) + b + 1 : b + 1 - a }, (item) => a++)
}




console.log(between(1, 4)) // [1, 2, 3, 4]
console.log(between(-2, 2)) //[-2, -1, 0, 1, 2]
console.log(between(73, 94)) //[-2, -1, 0, 1, 2]
