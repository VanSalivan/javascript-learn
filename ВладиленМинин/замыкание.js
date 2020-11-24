// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42);
// calc()

function creatIncrementor(n) { // n замнктнута 
    return function (num) {
        return n + num
    }
}

// создаем функцию с замнкнутым параметром
const addOne = creatIncrementor(1); // 1 всегда будет добавляться

console.log(addOne(10)) // передаем параметр к которому прибавляется замнкнутный параметр(1)

function urlGenerator(domain) { // замнктнутый атрибут
    return function (url) { // url мы передаем при вызове
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
const comRu = urlGenerator('ru');

console.log(comUrl('google')); // передаем атрибут который подставляется в параметр внутренней функции
console.log(comRu('vkontakte'));


function creatIncrementor1() {
    let counter = 0;
    return {
        add: function () {
           return counter += 1;
        }
    }
}

// создаем функцию с замнкнутым параметром
const addOne1 = creatIncrementor1(); // 1 всегда будет добавляться

console.log(addOne1.add()) // передаем параметр к которому прибавляется замнкнутный параметр(1)
console.log(addOne1.add())
console.log(addOne1.add())
