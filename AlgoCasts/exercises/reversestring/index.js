// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseArpit(str) {
  temp = ""
  for(i=str.length-1;i>=0;i--){
    temp = temp + str[i]
  }
  return temp
}

function reverse1(str) {
  const arr = str.split('')
  arr.reverse()
  return arr.join('')
}

function reverse2(str) {
  return str.split('').reverse().join('')
}

function reverse3(str) {
  let reversed = '';
  for(let character of str){
    reversed = character + reversed
  }
  return reversed
}

function reverse4(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  },'')
}

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
