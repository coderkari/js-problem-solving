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
  let a = parseInt(readline())
  for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
      console.log(`${i}^2 = ${Math.pow(i, 2)}`)
    }
  }
}
