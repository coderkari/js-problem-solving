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
  let readCount = parseInt(readline())
  const arr = []
  for (let i = 1; i <= readCount; i++) {
    arr.push(readline().replace('\r', ''))
  }
  let C = arr.filter((t) => t.includes('C'))
  let R = arr.filter((t) => t.includes('R'))
  let S = arr.filter((t) => t.includes('S'))
  let T = arr.map((n) => n.split(' '))
  let rabb = C.map((n) => n.split(' '))
  let ratt = R.map((n) => n.split(' '))
  let frgg = S.map((n) => n.split(' '))
  let total = 0
  let rabbit = 0
  let rat = 0
  let frog = 0

  T.map((n) => {
    total += +n[0]
  })

  rabb.map((n) => {
    rabbit += +n[0]
  })
  ratt.map((n) => {
    rat += +n[0]
  })
  frgg.map((n) => {
    frog += +n[0]
  })
  console.log(`Total: ${total} cobaias`)
  console.log(`Total de coelhos: ${rabbit}`)
  console.log(`Total de ratos: ${rat}`)
  console.log(`Total de sapos: ${frog}`)
  console.log(`Percentual de coelhos: ${((rabbit * 100) / total).toFixed(2)} %`)
  console.log(`Percentual de ratos: ${((rat * 100) / total).toFixed(2)} %`)
  console.log(`Percentual de sapos: ${((frog * 100) / total).toFixed(2)} %`)
}
