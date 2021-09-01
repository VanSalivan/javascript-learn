// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, 
// заданных массивом минимум из 4 положительных целых чисел. 
// Никакие числа с плавающей запятой или неположительные целые числа не передаются.

const sumTwoSmallestNumbers = (array) => {
  let newArray = array.sort((a, b) => a - b)
  return newArray[0] + newArray[1]
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

