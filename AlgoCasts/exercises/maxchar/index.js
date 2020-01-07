// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxCharArpit(str) {
  let charCountMap = {}
  let maxChar = ""
  let count = 0
  for(let char of str){
    if(charCountMap[char] != undefined)
    {
      charCountMap[char] += 1
    } else {
      charCountMap[char] = 1
    }

    if(charCountMap[char] > count) {
      count += 1
      maxChar = char
    }
  }
  return maxChar
}

function maxChar(str) {
  let charsCountMap = {}
  let maxChar = ""
  let max = 0
  for(let char of str){
    charsCountMap[char] = charsCountMap[char] + 1 || 1
  }

  for(let char in charsCountMap){
    if(charsCountMap[char] > max){
      max = charsCountMap[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar;
