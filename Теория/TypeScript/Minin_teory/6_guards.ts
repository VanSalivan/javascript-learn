// Guard – вспомогательные конструкции которые позволяют работать с типами

//typeof - проверка типа
function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2); // понимает что это число
  }

  return x.toLocaleUpperCase(); // понимает что это строка
}

//instanceof - принадлежность объекта к классу
class MyResponse {
  header = 'response header';
  result = 'response result';
}
class MyError {
  header = 'error header';
  message = 'error result';
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result, // понимает что это MyResponse
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//=====
type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
  // ...что-то делает...
}

setAlertType('success') // работает корректно
setAlertType('warning') // работает корректно
setAlertType('alert') // нет такого типа!