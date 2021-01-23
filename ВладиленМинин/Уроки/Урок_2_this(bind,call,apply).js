function hello() {
    console.log('hello', this)
}

// this - смотрит на обьект слева => window.this
//      - указыывает на тот обьект в контексте которого оно было вызвано

// === functionName.BIND =====================================
const person = {
    name: 'Alexander',
    age: 28,
    sayHello: hello, // теперь this покажет => person.this

    // МЕТОД BIND - привязывает this к обьекту который мы внутри него передаем 
    // functionName.bind(обьект к которому мы хотим привязать this)
    sayHelloWindow: hello.bind(window), // теперь this покажет => window.this
    sayHelloDocument: hello.bind(document),

    logInfo: function (job, phone) { // `${}` - ИНТЕРПОЛЯЦИЯ
        console.group(`${this.name} Информация:`) // Группируем под заголовок
        console.log(`Name is ${this.name}`); // Name is Alexander
        console.log(`Age is ${this.age}`);   // Age is 28
        console.log(`Job is ${job}`); // передаем в параметрах
        console.log(`Phone is ${phone}`); // передаем в параметрах
        console.groupEnd() // окончание группирования
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// Мы можем использовать функцию другого обьекта
// передав туда контексом другой обьект c помощью bind() и вызвал функцию()
// person.logInfo.bind(lena)() // - вызов // Name is Elena  Age is 23

// Перемеписываем в переменную - функцию
// const functionLenaInfoLog = person.logInfo.bind(lena);

// Вызываем и передаем параметры классически
// functionLenaInfoLog('FRONT-END','8-999-99-99-99')

// Мы можем передавать параметры вызываемой функции в функцию bind(Обьект,параметр1,параметр2)
// const functionLenaInfoLog = person.logInfo.bind(lena,'FRONT-END','8-999-99-99-99')
// functionLenaInfoLog()

// === functionName.CALL =====================================

// Метод bind - возвращает новую функцию, которую мы можем вызвать когда нам будет угодно
person.logInfo.bind(lena, 'FRONT-END', '8-999-99-99-99')

// Метод call - вызывает функцию сразу, нет необходимости вызывать ее ()
person.logInfo.call(lena, 'FRONT-END', '8-999-99-99-99')


// === functionName.APPLY =====================================

// Метод apply - отличается от call только способом передачи параметров - через массив
person.logInfo.apply(lena, ['FRONT-END', '8-999-99-99-99'])

// === Практика ===============================================

const array = [1, 2, 3, 4, 5];

// Напишем функцию которая будет умножать каждый элемент массива на N-число

// function multy(array, n) { // array - передаем массив, n - передаем на какое число умножаем
//     return array.map(function (i) { // возвращаем массив по которому проходим методом map
//         return i * n //возвращаем  i - каждый элемент массива умноженный на число n
//     }) // map возвращает новый массив
// }

// console.log(multy(array, 5))

// Как сделать что у этого массива был метод который позволяет выполнить подобный функционал?

// Используем протопиты - обратимся к прототипу обьекта массива - Array
Array.prototype.multy = function (n) { // создаем новую функцию для обьекта, n - число на которое умножаем массив(number)
    return this.map(function (i) { // заменяем конкретный массив - array на контекст вызова - this
        return i * n
    })
}

console.log(array.multy(10))
