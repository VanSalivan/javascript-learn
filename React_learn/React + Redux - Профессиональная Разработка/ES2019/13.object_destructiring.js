// Destructuring - Деструктуризация

const myInfo = {
    name: {
        first: "Alexander",
        last: "Akelev"
    },
    age: 29
}

// Старый способ декструктуризации обьекта
// const firstName = myInfo.name;
// const familyName = myInfo.family;

// const { name: { first, last } } = myInfo;
// Переименовываем значения констант значение: *новое имя для значения*
const { name: { first: firstName, last: lastName } } = myInfo;
console.log(firstName, lastName)

// Деструктуризация аргументов функции

function connect({ host = 'localhost', port = 12345, user = 'user' } = {}) { // набор параметров по умолчанию, передаем пустой обьект по умолчанию
    console.log(host, port, user);
}

connect();// без передачи обьекта по умолчанию необходимо передать в функцию обьект connect({})

// Rest element

const zoo = {
    lion: "Arhhh",
    duck: "quack",
    dog: "wuff"
}

const { duck, ...otherAnimals } = zoo;  
// *...название обьект* складывает все остальные параметры в отдельные обьект 

console.log(otherAnimals);
