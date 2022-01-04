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
  let a = parseFloat(readline())
  let salary = 0
  let increment = 0
  let percent = 0
  if (a >= 0 && a <= 400) {
    increment = (a * 15) / 100
    salary = a + increment
    percent = 15
  }
  if (a > 400 && a <= 800) {
    increment = (a * 12) / 100
    salary = a + increment
    percent = 12
  }
  if (a > 800 && a <= 1200) {
    increment = (a * 10) / 100
    salary = a + increment
    percent = 10
  }
  if (a > 1200 && a <= 2000) {
    increment = (a * 7) / 100
    salary = a + increment
    percent = 7
  }
  if (a > 2000) {
    increment = (a * 4) / 100
    salary = a + increment
    percent = 4
  }
  console.log(`Novo salario: ${salary.toFixed(2)}`)
  console.log(`Reajuste ganho: ${increment.toFixed(2)}`)
  console.log(`Em percentual: ${percent} %`)
}
