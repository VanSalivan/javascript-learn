//! PROTOTYPE / НАСЛЕДОВАНИЕ

// const animal = {
//     say() {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

//? 1) Object.setPrototypeOf - не стоит использовать т.к. он сильно сказывается на производительности

// const dog = {
//     name: 'dog',
//     voice: 'woof'
// };
// const cat = {
//     name: 'cat',
//     voice: 'meow'
// };
// Object.setPrototypeOf(dog, animal); //* первый аргумент - обьект наследования, второй - от которого наследуется
// Object.setPrototypeOf(cat, animal);
//===========================================

//? 2) Object.create

// function createAnimal(name, voice) { // Функция для создания обьектов с прототипом animal
//     const result = Object.create(animal); //* Мы создаем пустой обьект с прототипом передаваемого аргумента .create(аргумент-прототип)
//     result.name = name;
//     result.voice = voice;
//     return result; // возравщаем результал функции
// };

// const dog = createAnimal('Dog', 'Woof');
// const cat = createAnimal('Cat', 'Meow');
//===========================================

//? 3) Конструктор - new

function Animal(name, voice) { // ! Функция которая создает новые обьекты - именуется с большой буквы
    //* 1) Не нужно создавать новый обьект, JS сделает это за нас
    this.name = name;   //* 2) Обьект внутри функции конструктора будет называться this
    this.voice = voice;
    //* 3) Не нужно возращать обьект, новый обьект возращается автоматически когда мы вызывем его с "new"
}

//* 4) Добавляем в пустой обьект "Animal" метод
Animal.prototype.say = function () {
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');

dog.say();
cat.say();