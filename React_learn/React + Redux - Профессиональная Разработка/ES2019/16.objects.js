// Objects
const x = 10;
const y = 30;

//ES5
const point = {
    x: x,
    y: y,
    sum: function () {
        console.log(x + y)
    }
};
//ES2015
const p = {
    x,
    y,
    sum() {
        console.log(x + y)
    }
};
//===========================================
// Копирование свойств

const defaults = {
    hots: 'localhost',
    bdName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'John',
    password: 'utopia'
};

console.log(defaults);
//===========================================
//Метод assign
const res = Object.assign({},defaults, opts); // первый обьект получит все значения, следующие передают свойства первому обьекту 
console.log(defaults);
console.log(res);
//===========================================
// Создаем shallow copy
const person = {
    name: 'Alexander',
    friends: ['Pasha', 'Kirill']
};

// Создаем поверхностную копию обьекта 
const shallowCopy = Object.assign({}, person);
person.friends.push("Jane");
console.log(shallowCopy)