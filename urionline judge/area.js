let abc = '3.0 4.0 5.2'.split(' ').map((n) => +n)
let [A, B, C] = abc
let triangle = (1 / 2) * A * C
let circle = 3.14159 * Math.pow(C, 2)
let trapezium = ((A + B) / 2) * C
let square = Math.pow(B, 2)
let rectangle = A * B

console.log('TRIANGULO: ' + triangle.toFixed(3))
console.log('CIRCULO: ' + circle.toFixed(3))
console.log('TRAPEZIO: ' + trapezium.toFixed(3))
console.log('QUADRADO: ' + square.toFixed(3))
console.log('RETANGULO: ' + rectangle.toFixed(3))
