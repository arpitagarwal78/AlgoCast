// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
  let checker = ['a','e','i','o','u']
  let count = 0
  for(let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count += 1
    }

  }
  return count
}

// g - dont stop in first match i- case insensitive []- any character within square
// match return array of all the matches other wise return null
function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0

}

module.exports = vowels;
