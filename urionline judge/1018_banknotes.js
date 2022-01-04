let n = 576

let x100 = n % 100
let d100 = Math.floor(n / 100)

let x50 = x100 % 50
let d50 = Math.floor(x100 / 50)

let x20 = x50 % 20
let d20 = Math.floor(x50 / 20)

let x10 = x20 % 10
let d10 = Math.floor(x20 / 10)

let x5 = x10 % 5
let d5 = Math.floor(x10 / 5)

let x2 = x5 % 2
let d2 = Math.floor(x5 / 2)

let x1 = x2 % 1
let d1 = Math.floor(x2 / 1)

console.log(n)
console.log(d100 + ' nota(s) de R$ 100,00')
console.log(d50 + ' nota(s) de R$ 50,00')
console.log(d20 + ' nota(s) de R$ 20,00')
console.log(d10 + ' nota(s) de R$ 10,00')
console.log(d5 + ' nota(s) de R$ 5,00')
console.log(d2 + ' nota(s) de R$ 2,00')
console.log(d1 + ' nota(s) de R$ 1,00')
