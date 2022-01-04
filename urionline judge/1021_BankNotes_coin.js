let a = 576.73
let n = a * 100

let x100 = n % 10000
let d100 = Math.floor(n / 10000)

let x50 = x100 % 5000
let d50 = Math.floor(x100 / 5000)

let x20 = x50 % 2000
let d20 = Math.floor(x50 / 2000)

let x10 = x20 % 1000
let d10 = Math.floor(x20 / 1000)

let x5 = x10 % 500
let d5 = Math.floor(x10 / 500)

let x2 = x5 % 200
let d2 = Math.floor(x5 / 200)

// Moedas
let y100 = x2 % 100
let m100 = Math.floor(x2 / 100)

let y50 = y100 % 50
let m50 = Math.floor(y100 / 50)

let y25 = y50 % 25
let m25 = Math.floor(y50 / 25)

let y10 = y25 % 10
let m10 = Math.floor(y25 / 10)

let y05 = y10 % 5
let m05 = Math.floor(y10 / 5)

let y01 = y05 % 1
let m01 = Math.floor(y05 / 1)

console.log('NOTAS:')
console.log(d100 + ' nota(s) de R$ 100.00')
console.log(d50 + ' nota(s) de R$ 50.00')
console.log(d20 + ' nota(s) de R$ 20.00')
console.log(d10 + ' nota(s) de R$ 10.00')
console.log(d5 + ' nota(s) de R$ 5.00')
console.log(d2 + ' nota(s) de R$ 2.00')
console.log('MOEDAS:')
console.log(m100 + ' moeda(s) de R$ 1.00')
console.log(m50 + ' moeda(s) de R$ 0.50')
console.log(m25 + ' moeda(s) de R$ 0.25')
console.log(m10 + ' moeda(s) de R$ 0.10')
console.log(m05 + ' moeda(s) de R$ 0.05')
console.log(m01 + ' moeda(s) de R$ 0.01')
