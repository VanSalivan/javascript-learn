urls = [
  'example1.ru',
  'example2.ru',
  'example3.ru',
  'example4.ru',
];

async function Fn(url) {
  const result = await fetchMock(url);
  console.log(result)
}

let completedPromise = Promise.resolve()

for (let i = 0; i < urls.length; i++) {
  completedPromise = completedPromise.then(() => Fn(urls[i]))
}

// urls.reduce((total, item, index, array) => {
//   return total = total.then(() => Fn(item))

// }, Promise.resolve())


function fetchMock(url) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(url)
    }, 3000)
  })
}


// fetchMock(488).then((data) => fetchMock(data)).then((data) => console.log(data))