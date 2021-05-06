setTimeout(function () { alert("Time to take the cookies out of the oven"); }, 600000);
//         Функция - callback { тело функции }

// функция multN получает число (назовем его n) и возвращает
// функцию. Эта функция также получает число, умножает его на n и возвращает результат
function multN(n) {
    return function multBy(m) {
        return n * m;
    };
};

let test = multN(10);
// Итак, вызов test(10) возвращает функцию, которая умножает любое переданное число на 10

// разновидность счетчика, созданного ранее в этой главе. Функция
// makeCounter не получает аргументов, но определяет переменную count. Затем она создает и
// возвращает объект с единственным методом increment. Этот метод увеличивает переменную
// count и возвращает ее.
function makeCounter() {
    let count = 0;
    return { // получаем объект с методом (который представляет собой замыкание).
        increment: function () {
            count++;
            return count;
        }
    }
}
let count = makeCounter();

// console.log(test(2));
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())


window.onload = function () {
    var count = 0;
    var message = "You clicked me ";
    var div = document.getElementById("message");
    var button = document.getElementById("clickme");
    button.onclick = function () {
        count++;
        div.innerHTML = message + count + " times!";
    };
};

var secret = "007";
function getSecret() {
    var secret = "008";
    function getValue() {
        return secret;
    }
    return getValue();
}

console.log(getSecret());
