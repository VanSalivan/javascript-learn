//First Unique Character in a String — Первый уникальный символ в строке.

// Условия следующие: 
// нам необходимо написать функцию, которая принимает в качестве аргумента строку и возвращает индекс первого уникального символа.
// Если мы не найдем ни одного уникального символа, то функция должна вернуть - 1.

//Дополнительные ограничения: 
//1) длина строки может быть от 1 до 10^5; 
//2) строка содержит только буквы английского алфавита в нижнем регистре.


//Решение
// 1 - создаем Хешмап для записи количества повторений при прохождении цикла
// 2 - делаем цикл для нахождения ПЕРВОГО УНИКАЛЬНОГО

const input1 = 'leetcode' // 0
const input2 = 'loveleetcode' // 2
const input3 = 'aabb' // -1

const firstUniqChar = (string) => {
  let hashMap = new Map();

  for (let i = 0; i < string.length; i++) {
    // 1 этап - записываем количество повторений для символов
    let current = string[i]; // Текущий элемент в цикле

    // если элемент уже есть в данных
    if (hashMap.has(current)) {
      // map.set(key, value) – записывает по ключу key значение value.
      hashMap.set(current, hashMap.get(current) + 1) // map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
      console.log(`Уникальный символ ${current} : число повторений ${hashMap.get(current)}`)
    } else {
      hashMap.set(current, 1)
    }
  }

  // 2 этап - находим первый уникальный символ
  for (let i = 0; i < string.length; i++) {
    if (hashMap.get(string[i]) === 1) {
      return i;
    }
  }

  return - 1
}

console.log(firstUniqChar(input1))
console.log(firstUniqChar(input2))
console.log(firstUniqChar(input3))