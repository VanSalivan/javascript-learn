const people = [
    { name: 'Владилен', age: 25, budget: 40000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 3000 },
];

//? Циклы
//=================================================================
//* for ES5
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

//* for of ES6
// for (let person of people) {
//     console.log(person.name)
// }

//* forEach
// people.forEach(function (person) {
//     console.log(person.name)
// })

// people.forEach(person => console.log(person.name))

//=================================================================

//* Map - служит для преобразование текущего массива в новый массив
// const personNameArr = people.map(person => {
//     return person.name
// })

// console.log(personNameArr)

//=================================================================
//* filter - метод возвращающий true или false
// const adult = []; // массив лиц старше 18 лет
// for (person of people) {
//     if (person.age >= 18) { // проверка элемента больше 18 лет
//         adult.push(person.name) // пройденные элементы добавляются в массив
//     }
// }
// console.log(adult)

// const adult = people.filter(person => {
//     if (person.age >= 18) {
//         return 1 // возвращает true
//     }
// })
// console.log(adult)

//=================================================================
//* reduce - возвращая одно результирующее значение
// let amount = 0; // суммарный бюджет чисел в массиве
// for (let i = 0; i < people.length; i++) {
//     amount = amount + people[i].budget
// }
// console.log(amount)

// Первый параметр reduce - функция параметр у которой (первое значение  - аккумулятор чисел, второе - итерируемый элемент))

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0) // Второй параметр reduce - стартовое значение аккулирующего значения (например 0 + сумма итераций(500) = 0 + 500)

// console.log(amount)
//=================================================================
//* find - возвращает первый элемент в массиве отвечающий заданым условиям
// const elena = people.find((person) => person.name === 'Елена');
// console.log(elena);

//=================================================================
//* findIndex - возврашет индекс первого элемента в массиве отвечающий заданым условиям
// const elenaIndex = people.findIndex((person) => person.name === 'Елена');
// console.log(elenaIndex);
