let xy = '-0.1 0.1'.split(' ').map((n) => +n)
let [x, y] = xy

if (x == 0 && y == 0) {
  console.log('Origem')
}

if (x == 0 && y != 0) {
  console.log('Eixo Y')
}
if (x != 0 && y == 0) {
  console.log('Eixo X')
}

if (x > 0 && y > 0) {
  console.log('Q1')
}
if (x < 0 && y < 0) {
  console.log('Q3')
}

if (x > 0 && y < 0) {
  console.log('Q4')
}
if (x < 0 && y > 0) {
  console.log('Q2')
}
