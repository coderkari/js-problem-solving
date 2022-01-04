'use strict'
process.stdin.resume()
process.stdin.setEncoding('utf-8')

function print(x) {
  console.log(x)
}
let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})
process.stdin.on('end', () => {
  inputString = inputString.split('\n')
  main()
})
function readline() {
  return inputString[currentLine++]
}

// ************************ Code Start ***************************
function main() {
  /* *******************start here************************* */
  let abc = readline()
  let [a, b, c] = abc
    .split(' ')
    .map((n) => +n)
    .sort((a, b) => b - a)

  if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO')
  } else if (a * a == b * b + c * c) {
    console.log('TRIANGULO RETANGULO')
  } else if (a * a > b * b + c * c) {
    console.log('TRIANGULO OBTUSANGULO')
  } else if (a * a < b * b + c * c) {
    console.log('TRIANGULO ACUTANGULO')
  }
  if (a == b && b == c) {
    console.log('TRIANGULO EQUILATERO')
  }
  if ((a == b && b !== c) || (b == c && c !== a)) {
    console.log('TRIANGULO ISOSCELES')
  }
}
