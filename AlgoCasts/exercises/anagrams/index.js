// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCountMap(str) {
  countMap = {}
  for(let char in str.replace(/[^\w]/g,'').toLowerCase()){
    countMap[char] = countMap[char] + 1 || 1
  }
  return countMap
}

function anagrams1(stringA, stringB) {
  let getCountMapStringA = getCountMap(stringA)
  let getCountMapStringB = getCountMap(stringB)
  if(Object.keys(getCountMapStringA).length !== Object.keys(getCountMapStringB).length) {
    return false;
  }
  for(let key in getCountMapStringA) {
      if(getCountMapStringA[key] !== getCountMapStringB[key] ){
        return false;
      }
    }
    return true;
}


function sortString(str) {
  str = str.replace(/[^\w]/g,"").toLowerCase()
  return str.toLowerCase().split('').sort().join('')
}

function anagrams(stringA, stringB) {
  return sortString(stringA) === sortString(stringB)
}

module.exports = anagrams;
