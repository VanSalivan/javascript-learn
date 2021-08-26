const str = "This is an example!" // ==> "sihT si na !elpmaxe"
const str2 = "double  spaces"     //  ==> "elbuod  secaps"

const reverseWords = (str) => str.split(' ').map(word => [...word].reverse().join('')).join(' ')

console.log(reverseWords(str))