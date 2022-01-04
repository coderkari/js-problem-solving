let a = [50, 2, 3, 4, 5, 6, 7, 2]

let highest = Math.max(...a)
let index = a.findIndex((n) => n === highest)
console.log(highest)
console.log(index + 1)
