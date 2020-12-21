// REST параметр

// "..." складывает набор паремтров в массив
function max(a, b, ...numbers) { // ... обязан идти последним
    console.log(numbers)
}
// max(1, 3, 5, 8);



// SPREAD оператор

// "раскладывает" массив на значения

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 4, 6, 41];

console.log(Math.max(...arr1)) // Метод max находит максимальное число среди значений
console.log(Math.max(40, ...arr1, ...arr2, 5)) // Поиск среди двух массивов при помощи spread оператора

// Spread оператор позволяет создавать копии массивов
const shallowCopy = [...arr1, ...arr2]; // совмещаем в один массив, 
const shallowCopy2 = [...arr1, "новое значение", ...arr2]; // добавляем свои значения
console.log(shallowCopy)
