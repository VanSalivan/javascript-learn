
let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 68, 18,
    41, 53, 55, 61, 51, 44];

let output;

let costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(array) {
    let highScore = 0;
    let output;

    for (let i = 0; i < array.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        // console.log(output);
        if (array[i] > highScore) {
            highScore = array[i];
        }
    }
    return highScore; // после выполнения функции возвращаем в область видимости
}

function getBestResults(array) {
    let bestSolutions = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == highScore) {
            bestSolutions.push(i);
        }
    }

    return bestSolutions
}


function getMostCostEffectiveSolution(scores, costs, highscore) {
    let cost = 100;
    let index;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index
}


let highScore = printAndGetHighScore(scores); // записываем резульатат работы функции с массивом в переменную
let bestSolutions = getBestResults(scores);

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");

// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble score: " + highScore);
// console.log("Solutions with the highest score: " + bestSolutions);

