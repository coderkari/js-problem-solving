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
  let numberOfRead = parseInt(readline())
  let x = 0
  let y = 0
  let n = null
  for (let i = 1; i <= numberOfRead; i++) {
    n = parseInt(readline())
    if (n >= 10 && n <= 20) {
      x++
    } else {
      y++
    }
  }
  console.log(x + ' in')
  console.log(y + ' out')
}
