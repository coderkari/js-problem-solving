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
  let arr = abc.split(' ').map((n) => +n)
  const fromMin = arr.sort((a, b) => a - b)
  fromMin.map((n) => console.log(n))
  console.log('')
  abc.split(' ').map((n) => console.log(+n))
}
