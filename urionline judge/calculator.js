let firstProd = '13 2 15.30'.split(' ').map((n) => parseFloat(n))
let secondProd = '161 4 5.20'.split(' ').map((n) => parseFloat(n))
let [fId, fUnit, fPrice] = firstProd
let [sId, sUnit, sPrice] = secondProd

let fTotal = fUnit * fPrice
let sTotal = sUnit * sPrice
let total = fTotal + sTotal
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))
