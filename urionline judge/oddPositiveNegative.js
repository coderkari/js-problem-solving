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

  let readCount = parseInt(readline())
  const arr = []
  for (let i = 1; i <= readCount; i++) {
    arr.push(parseInt(readline()))
  }

  arr.map((n) => {
    if (n > 0 && n % 2 != 0) {
      console.log('ODD POSITIVE')
    }
    if (n < 0 && n % 2 != 0) {
      console.log('ODD NEGATIVE')
    }
    if (n < 0 && n % 2 == 0) {
      console.log('EVEN NEGATIVE')
    }
    if (n > 0 && n % 2 == 0) {
      console.log('EVEN POSITIVE')
    }
    if (n == 0) {
      console.log('NULL')
    }
  })
}
