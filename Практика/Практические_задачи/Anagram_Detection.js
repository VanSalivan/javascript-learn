var isAnagram = function (test, original) {
    let arrayTest = test.toLowerCase().split('').sort().join('')
    let arrayOriginal = original.toLowerCase().split('').sort().join('')

    if (arrayTest === arrayOriginal) {
        return true
    } else {
        return false
    }
};

console.log(isAnagram("foefet1", "toffee"));