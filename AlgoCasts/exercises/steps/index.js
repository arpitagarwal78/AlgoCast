// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsArpit(n) {
  let j = 0
  let i = 0
  let k = 0
  for(i=1;i<=n;i++){
    let str = ""
    for(j=1;j<=i;j++){
      str = str + "#"
    }
    for(k=j;k<=n;k++){
      str = str + ' '
    }
    console.log(str)
  }
}

// it is matrx solution where column is less than row
function steps1(n) {
  for(let i=0;i<n;i++){
    let str = ''
    for(let j=0;j<n;j++){
      if(j<=i){
        str = str + '#'
      } else {
        str = str + ' '
      }
    }
    console.log(str)
  }
}

// using above logi as recursion
function steps(n, row = 0, stair = '') {
  if ( n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair = stair + '#';
  } else {
    stair = stair + ' ';
  }

  steps(n, row, stair);
}
module.exports = steps;
