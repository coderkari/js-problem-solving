let id = parseFloat(readline())
let hour = parseFloat(readline())
let perhourDollar = parseFloat(readline())

let getTotal = hour * perhourDollar
console.log('NUMBER = ' + id)
console.log('SALARY = U$ ' + getTotal.toFixed(2))
