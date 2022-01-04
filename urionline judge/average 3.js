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
  let abcd = readline()
    .split(' ')
    .map((n) => +n)
  let [a, b, c, d] = abcd
  let result = parseFloat(readline())

  let average = (a * 2) / 10 + (b * 3) / 10 + (c * 4) / 10 + (d * 1) / 10

  let finalResult = null
  console.log('Media: ' + average.toFixed(1))
  if (average >= 7.0) {
    console.log('Aluno aprovado.')
  }
  if (average < 5.0) {
    console.log('Aluno reprovado.')
  }
  if (average >= 5 && average <= 6.9) {
    console.log('Aluno em exame.')
  }
  if (result) {
    console.log('Nota do exame: ' + result.toFixed(1))
  }
  if (result) {
    finalResult = (average + result) / 2
    if (finalResult >= 5) {
      console.log('Aluno aprovado.')
    }
    if (finalResult <= 4.9) {
      console.log('Aluno reprovado.')
    }
    console.log('Media final: ' + finalResult.toFixed(1))
  }
}
