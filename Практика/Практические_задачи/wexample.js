// Написать функцию, принимающую строку вида AABCEEEDDCAAYYY
// Возвращает строку с уникальными символами и количеством их повторений подряд - A2B1C1E3D2Y3

function foo(str) {
  let count = 0;
  let exampleString = null;

  // Массив уникальных значений
  const uniqArray = [...str].reduce((total, item, index, array) => {
    if (exampleString === item) {
      count++;
      if (index === array.length - 1) {
        let result = total.concat(`${exampleString}${count}`)

        return result
      }
    }
    else if (exampleString) {
      let result = total.concat(`${exampleString}${count}`)
      exampleString = item;
      count = 1;

      return result

    } else {
      count = 1;
      exampleString = item;
    }

    return total;
  }, [])


  console.log(uniqArray)
}


foo('AABCEEEDDCAAYYY')
//A2B1C1E3D2Y3