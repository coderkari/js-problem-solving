let name = readline()
let fixedSalary = parseFloat(readline())
let sellPrice = parseFloat(readline())
let bonus = (sellPrice / 100) * 15
const getTotalMoney = fixedSalary + bonus
console.log('TOTAL = R$ ' + getTotalMoney.toFixed(2))
