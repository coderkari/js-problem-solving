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
  let b = parseInt(readline())
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let sum = 0
  if (min === max) return console.log(sum)
  for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i
    }
  }
  console.log(sum)
}
