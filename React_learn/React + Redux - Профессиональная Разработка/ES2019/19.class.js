//! Class / Классы

//? Наследование через прототип через конструктор

// function Animal(name, voice) {
//     this.name = name;
//     this.voice = voice;
// }
// Animal.prototype.say = function () {
//     console.log(this.name, 'goes', this.voice);
// };
// const dog = new Animal('Dog', 'Woof');

//===========================================

//? ES5 Class

class Animal { //* 1) Создаем класс
    constructor(name, voice) { //* 2) создаем функцию конструктор
        this.name = name;
        this.voice = voice;
    }
    say() { //* 3) создаем необходимые методы для класса
        console.log(this.name, 'goes', this.voice);
    }
}

//? super()
//! duck => Bird.prototype => Animal.prototype => Object.prototype => null
//! Super класс - класс находящийся выше в цепочке прототипов наследований
class Bird extends Animal { //* 4) "Bird" наследуется от класса "Animal"
    constructor(name, voice, canFly) {
        //* 5) Если класс наследует другой класс мы должны вызвать конструктор "super" класса явно
        //* 6) Передаем name и voice конструктору выше => Animal
        super(name, voice);
        super.say(); // Метод super конструктора Animal
        this.say(); //  Метод конструктора Bird
        //* 7) Если мы наследуем класс - нужно вызвать "super" конструктор до того как мы впервые используем "this"
        this.canFly = canFly;
    }
    //! мы можем полностью переопределить метод вышестоящего класса
    say() {
        console.log('Birds dont like to talk');
    }
}

const duck = new Bird('Duck', 'Quack', true); // * *) Создаем обект с классом "Bird"
console.log(duck);
