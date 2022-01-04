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
  let readNumber = parseInt(readline())
  const arr = []
  for (let i = 1; i <= readNumber; i++) {
    arr.push(
      readline()
        .split(' ')
        .map((n) => +n)
    )
  }
  arr.map((n) => {
    let [a, b, c] = n
    let average = (a * 2) / 10 + (b * 3) / 10 + (c * 5) / 10
    console.log(average.toFixed(1))
  })
}
