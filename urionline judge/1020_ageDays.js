let days = parseInt(400)

let year = Math.floor(days / 365)
let rDays = days % 365

let month = Math.floor(rDays / 30)
let day = rDays % 30

console.log(year + ' ano(s)')
console.log(month + ' mes(es)')
console.log(day + ' dia(s)')
