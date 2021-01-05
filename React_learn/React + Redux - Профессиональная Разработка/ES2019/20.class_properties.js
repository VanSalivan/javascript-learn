//! Class properties
//===========================================
// ? properties

// class Counter {
//     count = 1; //* Позволяет определять свойства внутри класса
//     inc = () => { //* inc будет привязан к конктректному обьекту созданному по классу
//         this.count++;
//         console.log(this.count)
//     }
// }

//===========================================
//* Рефактор для версий менее ES2019
class Counter {
    constructor() {
        this.count = 1;
        this.inc = () => {
            this.count++;
            console.log(this.count)
        };
    }
}

const cnt = new Counter();
cnt.inc();
cnt.inc();
cnt.inc();
cnt.inc(); // count обьекта cnt будет 5

const cnt2 = new Counter();
cnt2.inc(); // count обьекта cnt2 будет 2

//===========================================
// ? static
//! Статические свойтсва принадлежат классу а не конткретным обьектам
//! Используются для логической группировки функций

class Counter2 {
    count = 1;

    inc = () => {
        this.count = this.count + Counter2.incStep;
        console.log(this.count)
    }

    static incStep = 10; // сумма для увеличения в счетчике
    static incrementAll = arr => {
        arr.forEach((el) => el.inc())
    }
}

const cnt3 = new Counter2();
cnt3.inc();
cnt3.inc();