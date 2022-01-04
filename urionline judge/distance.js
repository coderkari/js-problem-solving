let x1y1 = '1.0 7.0'.split(' ').map((n) => +n)
let x2y2 = '5.0 9.0'.split(' ').map((n) => +n)

let [x1, y1] = x1y1
let [x2, y2] = x2y2

let X = Math.pow(x2 - x1, 2)
let Y = Math.pow(y2 - y1, 2)

let distance = Math.sqrt(X + Y)
console.log(distance.toFixed(4))
