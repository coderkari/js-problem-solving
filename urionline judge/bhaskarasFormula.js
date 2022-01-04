let abc = '10.0 20.1 5.1'.split(' ').map((n) => +n)
let [a, b, c] = abc
let del = Math.sqrt(Math.pow(b, 2) - 4 * a * c)
let aa = 2 * a
let R1 = (-b + del) / aa
let R2 = (-b - del) / aa

if (aa == 0 || isNaN(aa) || isNaN(del)) {
  console.log('Impossivel calcular')
  return
}

console.log('R1 = ' + R1.toFixed(5))
console.log('R2 = ' + R2.toFixed(5))
