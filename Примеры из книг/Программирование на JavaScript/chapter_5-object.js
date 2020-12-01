let fiat = {
    make: "Fiat",
    model: "500",
    started: false,
    fuel: 0, //В начале существования объекта car бензобак пуст.
    start: function () {
        this.started = true;
        if (this.fuel <= 0) {
            alert("Добавь бензина")
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                //Прежде чем выехать, мы убеждаемся, что в машине есть топливо. И если машина едет, количество бензина должно уменьшаться при каждом вызове.
                alert(this.make + " " +
                    this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                //Если бензина не осталось, мы выводим сообщение и останавливаем двигатель. Чтобы снова завести машину, необходимо добавить бензина и снова запустить двигатель.
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {// Количество добавляемого топлива задается параметром amount при вызове метода.
        this.fuel = this.fuel + amount;
    }
};

console.log(fiat);
fiat.needWash = true; //Добавляем новый параметр
// delete fiat.needWash; // удаляем параметр

function deleteWash(obj) { // функция получает копию ссылки и изменяет оригинальный объект
    delete obj.needWash;
    return obj;
}

deleteWash(fiat);

// for (let maybe in fiat) { // для каждого элемента maybe в объекте fiat
//     console.log(maybe + " : " + fiat[maybe])
// }

console.log('обращение через точку');
console["log"]('обращение через [" "]');

fiat.addFuel(2); // Методы влияют на состояние, а состояния на методы
fiat.start();
fiat.drive();
fiat.stop();

console.log(fiat.fuel)
console.log(fiat.started)

