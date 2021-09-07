var number = function (busStops) {
  const result = busStops.reduce((total, currentItem) => {
    return total += currentItem[0] - currentItem[1]
  }, 0);
  
  return result 
}


console.log(number([[10, 0], [3, 5], [5, 8]])) // 5
// console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])) //17
// console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))  // 21