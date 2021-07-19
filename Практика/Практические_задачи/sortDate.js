/*
Дан массив с датами. 
Необходимо написать функцию, которая вернёт объект вида:

{
  "2019": ["05-02", "22-09","07-12"];
  "2015": ["12-01"];
  "2010": ["10-06", "25-07"];
}

Даты в массивах должны быть отсортированы по возрастанию
*/

const data = [
  { date: "2019-12-07" },
  { date: "2015-01-12" },
  { date: "2010-07-25" },
  { date: "2010-06-10" },
  { date: "2019-02-02" },
  { date: "2019-09-22" },
];


function sortDate(arr) {
  const obj = {};
  const sortedArray = arr.slice().sort((a, b) =>  new Date(a.date) - new Date(b.date))

  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    const item = element.date.split('-');

    const year = item[0];
    const date = `${item[2]}-${item[1]}`;

    if (!obj.hasOwnProperty(year)) {
      obj[year] = [date];
    } else {
      obj[year].push(date);
    }
  }

  console.log(obj)
  return obj;
}

sortDate(data)
