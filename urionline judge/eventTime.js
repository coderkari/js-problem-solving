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
  let sDx = readline()
    .split(' ')
    .map((n) => +n)
  let [smD, sD] = sDx

  let shms = readline()
    .split(':')
    .map((n) => +n)
  let [sh, sm, ss] = shms

  let eDx = readline()
    .split(' ')
    .map((n) => +n)
  let [emD, eD] = eDx

  let ehms = readline()
    .split(':')
    .map((n) => +n)
  let [eh, em, es] = ehms

  if (es < ss) {
    es = es + 60
    sm = sm + 1
  }
  if (em < sm) {
    em = em + 60
    sh = sh + 1
  }
  if (eh < sh) {
    eh = eh + 24
    sD = sD + 1
  }

  let s = es - ss
  let m = em - sm
  let h = eh - sh
  let d = eD - sD

  console.log(d + ' dia(s)')
  console.log(h + ' hora(s)')
  console.log(m + ' minuto(s)')
  console.log(s + ' segundo(s)')
}
