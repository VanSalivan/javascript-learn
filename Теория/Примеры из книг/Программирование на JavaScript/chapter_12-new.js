// Использование конструкторов проходит в два этапа
// Сначала мы создаем конструктор,
function Dog(name, breed, weight) { // function Имя с заглавной буквы (параметры, для передачи)
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

// А потом используем его для создания объектов
// Для создания объекта используется оператор - new.
var fluffy = new Dog("Fluffy", "Poodle", 30); // За оператором new следует вызов конструктора - new Имя Конкструктора(параметры)

var fido = new Dog("Fido", "Mixed", 38)
// 1) Сначала new создает новый, пустой объект:
// 2) Затем new заносит в this ссылку на новый объект
// 3) После подготовки this вызывается функция Dog, которой передаются аргументы "Fido", "Mixed" и 38.
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}
// 4) Затем вызывается тело функции. Как и большинство конструкторов, Dog задает значения свойств только что созданного объекта this.
// 5) Наконец, после того как функция Dog будет выполнена, оператор new возвращает this, то есть ссылку на только что созданный объект.
// Обратите внимание: ссылка this возвращается автоматически, вам не придется явно возвращать ее в своем коде.
// И после того как новый объект будет возвращен, эта ссылка присваивается переменной fido.

// console.log(Dog)

var widgetA = Widget(100, "large");
var widgetB = new Widget(101, "small");

function Widget(partNo, size) {
    this.no = partNo;
    this.breed = size;
}

function FormFactor(material, widget) {
    this.material = material;
    this.widget = widget;
}

console.log(widgetA); // undefined - Без оператора new новый объект создан не будет.
console.log(widgetB);

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString())

//=================================================================
// Виды создания конструкторов

// 1)
// Старый вид с 7 параметрами
function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = 5;
    this.convertible = false;
    this.mileage = 12892;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.");
        }
    };
}
//Примеры созданий обьектов через конкструктор
var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);


// возьмите все аргументы, объедините их в объектный литерал, а затем передайте этот литерал своей функции.
// В этом случае все значения передаются в одном контейнере (литерал)
var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
// Затем вызов конструктора Car переписывается следующим образом:
var cadi = new Car(cadiParams);

// Конструктор ожидает получить семь аргументов, а не один объект.

// 2)
// Преобразование конструктора Car
function Car(params) { // семь параметров конструктора Car заменяются одним параметром для передаваемого объекта
    this.make = params.make;  // Затем каждая ссылка на параметр
    this.model = params.model;// заменяется соответствующим
    this.year = params.year;  // свойством объекта, переданного функции.
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    };
}
// console.log(cadi)

//==============================================================
// Экземпляры

// Метод проверки instanceof - проверяет является ли объект экзмепляром конструктора
// ИМЯ ОБЬЕКТА instanceof ИМЯ КОНСТРУКТОРА
var cadiParams = {
    make: "GM", model: "Cadillac", year: 1955, color: "tan",
    passengers: 5, convertible: false, mileage: 12892
};

if (cadi instanceof Car) {// вернет true или false
    console.log("Congrats, it's a Car!");
};
//===============================================================
// Разлиные обьекты

// Data
var now = new Date(); // Создает новый объект, представляющий текущую дату и время.
console.log(now)

// Array
var emptyArray = new Array(3); // в параметры можем передать длину
emptyArray[0] = 99; // 0: 99, 1: undefined, 2: undefined

var oddNumbers = new Array(3); //Создаем массив длины 3 и заполняем данными уже после создания.
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
// При желании вы можете легкодобавить в массив дополнительные элементы.
oddNumbers.push(17);

// REVERSE
oddNumbers.reverse();
// Перестановка значений массива в обратном порядке (теперь
// массив oddNumbers содержит элементы 5, 3, 1).
// Обратите внимание: метод ИЗМЕНЯЕТ ИСХОДНЫЙ массив, а не копию. 

// JOIN
var aString = oddNumbers.join(" - "); // В данном случае будет возвращена строка “5 - 3 - 1”.
// Метод join создает строку из значений oddNumbers,
// разделяя их последовательностью “ - ”, и возвращает полученную строку.

// EVERY
var areAllOdd = oddNumbers.every(function (x) {
    return ((x % 2) !== 0);
});
// Метод every получает функцию, и для каждого значения в массиве проверяет,
// какой результат вернет функция для это го значения — true или false.
// Если функция - возвращает true для всех элементов массива, то и метод every возвращает true

// ДВА СПОСОБА СОЗДАНИЯ МАССИВОВ
var items = new Array();
var items = [];
// Объекты, созданные на базе литералов и с прямым вызовом конструкторов,
// ничем не отличаются, так что методы могут использоваться в обоих случаях.


console.log(areAllOdd);
