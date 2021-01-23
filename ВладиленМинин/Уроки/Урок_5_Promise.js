// Симуляция ответа сервера

// console.log('Request Data...');
//=================================================================
//* 1) Promise - глобальный class - Обертка над асинронностью которая добавляет удобства для написания кода
//* 2) function (resolve, reject) - resolve для успешного запроса
//* 3) function (resolve, reject) - reject для не успешного запроса
//* 4) Promise.then(когда) - метод для последующей обработки асинхроного запроса
//* 5) Promise.catch() - метод для обработки неудачного запроса
//* 6) Promise.finally - Выводиться в любом случае
//* 7) Promise.all([]) - ждет пока выполнятся все промисы в массиве прежде чем выполнять тело функции
//* 8) Promise.race([]) - выполняет тело функции сразу после выполнения первого промиса

// setTimeout(() => {
//     console.log('Preparing Data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working',
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data complete', backendData);
//     }, 2000);

// }, 2000);

//=================================================================
//? Promise - глобальный class
//* Promise(функция(параметр решения,параметр отклонения))

// * Шаг 1) создаение асинхрого кода = через промис
// const p = new Promise(function (resolve, reject) { // resolve - успешно, reject - ошибка
//     // в теле пишется асинхронный код
//     console.log('Preparing Data...');

//     //"setTimeout" - асинхронный код
//     setTimeout(() => {
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working',
//         };
//         // функция "resolve" вызывается при УСПЕШНО законченной асихнронной операции  
//         resolve(backendData); // передаем в "resolve" полученный обьект
//     }, 2000)
// });

//? Promise.then(когда)
// p.then(data => console.log(data)) // записываем полученный обьект в параметр "data"
//=================================================================

// * Шаг 2) "then" когда первый промис выполниться
// p.then(data => { // записываем полученный обьект в параметр "data"
//     const p2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data); // Сообщаем промису что он завершился и возвращает нам обьект
//         }, 2000);
//     })

//     p2.then(clientData => console.log('Data complete', clientData)) // КОГДА Промис №2 = p2 завершился
// });

//=================================================================
//? Цепочки .then(когда)

// * Шаг 3) Использование chain"."(цепочки операций then"когда")
// Убираем переменные и работает с возвращенным промисом

// p.then(data => { // записываем полученный обьект в параметр "data"
//     return new Promise(function (resolve, reject) { //* Возвращаем новый промис для цепочки
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)

//     })
//         .then(clientData => { //* 1 чейн(цепь в списке)
//             console.log('Data complete', clientData);
//             clientData.newProperty = 300; // добавляем новое свойство
//             return clientData //* Возвращаем обьект

//         })
//         .then(newClientData => { //* 2 чейн(цепь в списке)
//             console.log('Modified', newClientData) // data с новый параметром
//         })
// })

//=================================================================
//? catch / reject

// * Шаг 4) catch - метод для обработки ошибки
// p.then(data => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             data.modified = true;
//             reject(data); // заменяем на "не успешно"
//         }, 2000)

//     })
//         .then(clientData => { 
//             console.log('Data complete', clientData);
//             clientData.newProperty = 300;
//             return clientData 

//         })
//         .then(newClientData => {
//             console.log('Modified', newClientData)
//         })
//         .catch(err => console.error('Error:', err)) // добавляем метод для обработки ошибки
// })

//=================================================================
//? метод finally

//* метод Promise.finally Выводиться в любом случае
// p.then(data => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data); // заменяем на "не успешно"
//         }, 2000)
//     })
// })
//     .then(clientData => {
//         console.log('Data complete', clientData);
//         clientData.newProperty = 300;
//         return clientData

//     })
//     .then(newClientData => {
//         console.log('Modified', newClientData)
//     })
//     .catch(err => console.error('Error:', err)) // добавляем метод для обработки ошибки
//     .finally(() => console.log('Выводиться в любом случае')) // Выводиться в любом случае

//=================================================================
//? метод all

const sleep = ms => { // функция возвращает промис
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 seconds'))
// sleep(3000).then(() => console.log('After 3 seconds'))

//* Promise.all([]) - ждет пока выполнятся все промисы в массиве прежде чем выполнять тело функции

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

//=================================================================
//? метод all

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})