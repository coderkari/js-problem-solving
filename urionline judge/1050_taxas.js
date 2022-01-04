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
  const a = parseFloat(readline())
  let tax8 = 0
  let tax18 = 0
  let tax28 = 0
  let totalTax = 0
  if (a <= 2000) {
    console.log('Isento')
    return
  }
  if (a > 2000 && a <= 3000) {
    tax8 = ((a - 2000) * 8) / 100
    totalTax = tax8
  }
  if (a > 3000 && a <= 4500) {
    tax8 = (1000 * 8) / 100
    tax18 = ((a - 3000) * 18) / 100
    totalTax = tax8 + tax18
  }
  if (a > 4500) {
    tax8 = (1000 * 8) / 100
    tax18 = (1500 * 18) / 100
    tax28 = ((a - 4500) * 28) / 100
    totalTax = tax8 + tax18 + tax28
  }
  console.log(`R$ ${totalTax.toFixed(2)}`)
}
