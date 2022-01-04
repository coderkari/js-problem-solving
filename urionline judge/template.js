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

// Code Start **
function main() {
  let num = readline()
  var reverse = function (num) {
    console.log(
      parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    )
  }

  reverse(num)
}
