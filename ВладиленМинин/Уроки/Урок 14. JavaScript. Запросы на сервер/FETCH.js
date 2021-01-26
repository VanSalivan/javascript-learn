const requestURL = 'https://jsonplaceholder.typicode.com/users';
//=================================================================
//* GET - запрос получения данных
//* POST - запрос для создания данных
//* DELETE - запрос удаления данных
//* PUT - запрос полного обновления элемента
//* PATCH - запрос для частичного обновления элемента
//=================================================================
//? FETCH API
//=================================================================
//* GET

// функция получает метод "GET/SET и т.д.", второй параметр - адрес, третий - обьект (по умолчанию null)
// function createSend(method, url, body = null) {
//     return fetch(url
//     ).then(response => {
//         if (response.ok) {
//             return response.json() // распрарсиваем содержимое response
//         }
//         return response.json().then(error => {
//             const e = new Error('Что-то пошло не так');
//             e.data = error
//             throw e; // выбрасываем ошибку
//         })
//     })
// }

// // вызов
// createSend('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

//=================================================================
//* POST - вместе с методом и адрессом 3тьтим параметром должно отправляться "тело обьекта"

// функция получает метод "GET/SET и т.д.", второй параметр - адрес, третий - обьект (по умолчанию null)
function createSend(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, { // метод fetch возвращает Промис и по умолчанию выполняет 'GET'
        method: method,  // вторым параметром мы передаем обьект конфигураций
        body: JSON.stringify(body), // Передаваемый обьект оборачиваем в строку
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json() // распрарсиваем содержимое response
        }
        return response.json().then(error => {
            const e = new Error('Что-то пошло не так');
            e.data = error
            throw e; // выбрасываем ошибку
        })
    })
}

const body = {
    name: 'Alexander', // третьим параметром передаем обьект
    age: 29,
};

// вызов
createSend('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.error(err))

//=================================================================
