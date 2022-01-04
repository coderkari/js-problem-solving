let a = parseFloat(7)
let b = parseFloat(-5)
let c = parseFloat(6)
let d = parseFloat(-3.4)
let e = parseFloat(4.6)
let f = parseFloat(12)
let arr = [a, b, c, d, e, f]

let arL = []
arr.forEach((e) => {
  if (e > !0) {
    arL.push(e)
  }
})
let sum = null
if (arL.length != 0) {
  arL.map((n) => (sum = n + sum))
}
let average = sum / arL.length
console.log(arL.length + ' valores positivos')
console.log(average.toFixed(1))
