//? Class(ы) - просто удобный синтаксис для создания обьектов
//=================================================================
//* 1) Static - статический параметр/метод класса доступный только ему,
//* не доступен обьектам созданным на его основе
//* 2) super - обращение к классу от которого идет наследование
//* 3) extends - позволяет наследоваться от указанного класса
//* 4) В классах есть getters/setters
//=================================================================

class Animal {
    // Статические переменные/методы доступны только для самого класса "Animal"
    // и не доступы созаваемым на его основе обьектам
    static type = 'Animal'

    constructor(option) { // Конструктор класса принимает параметром обьект
        this.name = option.name // "this" для контекста создаваемого параметра 
        this.age = option.age
        this.hasTail = option.hasTail
    }

    voice() { // Метод класса
        console.log(`I am ${this.name}`)
    }
};

//* Создание обьекта класса
// const animal = new Animal({
//     name: 'Lion',
//     age: 5,
//     hasTail: true
// });

//=================================================================
//? extends

class Cat extends Animal {
    constructor(option) { // вызываем конструктор с передаваемым обьектом
        super(option) // вызываем конструктор класса выше и передаем туда обьект
        this.color = option.color // присваиваем новый параметр для класса
    }

    voice() { // Мы можем переписывать методы из класса выше
        super.voice() // обращаемся к классу выше и вызываем его метод
        console.log(`I am Кот`)
    }

    get ageInfo() { // Геттер возваращаем значение в видел строки
        return this.age * 7;
    }

    set ageInfo(newAge) { // Сеттер реагирует на изменение значения
        this.age = newAge;  // изменяем поле лет на новое
    }
};

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});

//=================================================================
//? Цепочки наследования

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector) //? $переменая_с_Дом_Нодой
    }
    // методы для создаваемых обьектов
    hide() {
        this.$element.style.display = 'none';
    }
    show() { // метод для обьекта
        this.$element.style.display = 'block';
    }
}

//=====================  Шаг 2  ==================================

class Box extends Component { // Box наследуется от Component
    constructor(options) {
        super(options.selector) // передаем классу выше поле необходимое ему для работы
        this.$element.style.width = this.$element.style.height = options.size + 'px',
            this.$element.style.background = options.background
    }
}
// Создаем обьект
const box1 = new Box({
    selector: '#box1',
    size: 100,
    background: 'red'
})
// Создаем 2 обьект по классу
const box2 = new Box({
    selector: '#box2',
    size: 120,
    background: 'blue'
})

//=====================  Шаг 3  ==================================

class Circle extends Box {
    constructor(options) {
        super(options) // передаем значения классу выше
        this.$element.style.borderRadius = '50%' // параметр по умолчанию для этого класса
    }
}

// Создаем 3 обьект по классу
const circle = new Circle({
    selector: '#circle',
    size: 150,
    background: 'green'
})

//* Component <= Box <= Circle
//=================================================================
// Для HTML
    // <div id="box1" ></div>
    // <div id="box2"></div>
    // <div id="circle"></div>