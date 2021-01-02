// Array Destructuring
const fib = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c, ...gid] = fib;
console.log(a, b, c);
console.log(gid);
//===========================================
// для получения 4 значения массива
const [, m, , , five] = fib;
console.log(five);
//===========================================
// Работа с многомерными массивами

const line = [[10, 17], [14, 7]];

const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x + p2y);
//===========================================
// Параметр по умолчанию
const people = ["Alexander", "Anna"];

const [Sasha, Ana, Nastya = "Anastasia"] = people;
console.log(Sasha, Ana, Nastya);
//===========================================

const dict = {
    duck: "quack",
    tiger: "may",
    mouse: "squeak",
    cat: "may"
};

let res = Object.entries(dict);
// Функция принимает обьект и возвращает двухмерный массив
res = Object.entries(dict).filter(([key, value]) => value === "may");
// Возвращаем новый массив с ключами
res = res.map(([key]) => key);
console.log(res)
//===========================================
// Комбиринование декструктуризации для массивов и обьектов

const shape = {
    type: "segment",
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;

console.log(startX, startY, endX, endY)