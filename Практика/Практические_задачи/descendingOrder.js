function descendingOrder(number){
  return Number([...String(number)].sort((a, b) => b - a).join(''))
}

console.log((descendingOrder(123456789))) // 987654321