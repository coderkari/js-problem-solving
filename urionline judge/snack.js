let ab = '2 3'.split(' ').map((n) => +n)
let [a, b] = ab

let total = null

if (a == 1) {
  total = b * 4.0
  console.log('Total: R$ ' + total.toFixed(2))
}
if (a == 2) {
  total = b * 4.5
  console.log('Total: R$ ' + total.toFixed(2))
}
if (a == 3) {
  total = b * 5.0
  console.log('Total: R$ ' + total.toFixed(2))
}
if (a == 4) {
  total = b * 2.0
  console.log('Total: R$ ' + total.toFixed(2))
}
if (a == 5) {
  total = b * 1.5
  console.log('Total: R$ ' + total.toFixed(2))
}
