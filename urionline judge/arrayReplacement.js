let a = parseInt(1)
let b = parseInt(2)
let c = parseInt(0)
let d = parseInt(-20)
let e = parseInt(0)
let f = parseInt(0)
let g = parseInt(0)
let h = parseInt(0)
let i = parseInt(5)
let j = parseInt(10)
let arr = [a, b, c, d, e, f, g, h, i, j]
arr.map((n, i) => {
  if (n <= 0 || n == null) {
    console.log(`X[${i}] = ${n}`)
  } else {
    console.log(`X[${i}] = ${n}`)
  }
})
