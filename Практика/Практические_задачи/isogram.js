const isIsogram = (str) => {
  const haveWords = [...new Set(str.toLowerCase())].length;
  if (haveWords === [...str].length) {
    return true
  }
  return false
}

// isIsogram("Dermatoglyphics") // == true
isIsogram("aba") // == false
console.log(isIsogram("moOse")) // == false // -- ignore letter case