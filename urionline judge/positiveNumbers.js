let a = parseFloat(7)
let b = parseFloat(-5)
let c = parseFloat(6)
let d = parseFloat(-3.4)
let e = parseFloat(4.6)
let f = parseFloat(12)
let arr = [a, b, c, d, e, f]
let positive = new Array()
arr.map((n) => {
  if (n > 0) {
    positive.push(n)
  }
})

console.log(positive.length + ' valores positivos')
