let a = parseInt(-5)
let b = parseInt(0)
let c = parseInt(-3)
let d = parseInt(-4)
let e = parseInt(12)

let arr = [a, b, c, d, e]
let even = []
let odd = []
let positive = []
let negative = []
arr.map((n) => {
  if (n % 2 == 0) {
    even.push(n)
  }
  if (n % 2 != 0) {
    odd.push(n)
  }
  if (n > 0) {
    positive.push(n)
  }
  if (n < 0) {
    negative.push(n)
  }
})

console.log(even.length + ' valor(es) par(es)')
console.log(odd.length + ' valor(es) impar(es)')
console.log(positive.length + ' valor(es) positivo(s)')
console.log(negative.length + ' valor(es) negativo(s)')
