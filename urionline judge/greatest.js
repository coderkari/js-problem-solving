let abc = '217 14 6'.split(' ').map((n) => parseInt(n))
let [a, b, c] = abc
let greatest = (a + b + Math.abs(a - b)) / 2
let finalGreatest = (greatest + c + Math.abs(greatest - c)) / 2
console.log(finalGreatest + ' eh o maior')
