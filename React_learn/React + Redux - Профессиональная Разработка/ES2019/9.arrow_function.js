const qa = (x) => x * x;
const arr = ['1', '2', '3', '4'];

const res = arr
    .map((el) => parseInt(el)) // Возвращаем новый массив и парсим элементы в цифры
    .filter((num) => num % 2) // Фильтруем массив по остатку от 2х
    .reduce((max, value) => Math.max(max, value), 0);
console.log(res);

// => Сохраняет лексичесое значение this
// Нет свойства .prototype, не могут быть конструктором, не могу быть вызваны с "new"