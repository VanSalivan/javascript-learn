/*
 Написать программу, которая превращает полное имя(имя и фамилия) в инициалы.
 Программа возвращает инициалы полного имени, через точку Инициалы с большой буквы.
 На вход программа принимает строку.
 Если в строке будет больше двух слова, то мы должны сообщить пользователю, что не умеем работать с тремя и более словами.
 Сделать проверку на строку, если другой тип, то выкидываем ошибку.
 Если строка пустая, то выкидываем ошибку.
 Пример:
 Билл гейтс => Б.Г
 илон маск => И.М
 марк Цукерберг => М.Ц
*/
function foo(fullName) {
  const checkName = fullName.split(' ');

  if (checkName.length > 2 ) {
    return 'не умеем работать с тремя и более словами'
  } else if (checkName.length < 2) {
    return 'Введите полное имя'
  } else {
    const initial = checkName.map((item) => `${item[0]}.`.toUpperCase()).join('')
    // const initial = checkName.map((item) => item.substring(0, 1).toUpperCase() + '.').join('')
    return initial
  }
}


console.log(foo("Брэм Коэн")); //Б.К
console.log(foo("илон маск")); //И.М
console.log(foo("Билл гейтс")); //Б.Г
console.log(foo("джефф безос")); //Д.Б
console.log(foo("марк Цукерберг")); //М.Ц
console.log(foo("Линус Торвальдс")); //Л.Т
console.log(foo("cергей Брин")); //С.Б
console.log(foo("павел дуров")); //П.Д
console.log(foo("стив джобс")); //С.Д
