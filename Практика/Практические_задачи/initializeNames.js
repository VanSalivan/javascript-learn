function initializeNames(name) {
  let arr = name.split(' ').reduce((total, currentItem, index, array) => {
    if (array.length > 2 && index !== array.length - 1) {
      return `${total} ${currentItem[0]}.`
    }

    return `${total} ${currentItem}`
  })

  return arr
}


// console.log(initializeNames('Jack Ryan')) //'Jack Ryan', '');
// console.log(initializeNames('Lois Mary Lane')) // 'Lois M. Lane', '');
// console.log(initializeNames('Dimitri')) // 'Dimitri', '');
console.log(initializeNames('Alice Betty Catherine Davis')) // 'Alice B. C. Davis', '');
