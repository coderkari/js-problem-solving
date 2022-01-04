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
    .split(' ')
    .map((n) => +n)

  let [a, b, c] = abc

  if (a + b > c && a + c > b && b + c > a) {
    let perimetro = a + b + c
    console.log('Perimetro = ' + perimetro.toFixed(1))
  } else {
    let area = ((a + b) * c) / 2
    console.log('Area = ' + area.toFixed(1))
  }
}
