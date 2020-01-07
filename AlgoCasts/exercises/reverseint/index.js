// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseIntArpit(n) {
  let sign = Math.sign(n)
  if(sign < 0){
    n = n * -1
    return parseInt('-' + n.toString().split('').reverse().join(''))
  } else {
    return parseInt(n.toString().split('').reverse().join(''))
  }

}

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
