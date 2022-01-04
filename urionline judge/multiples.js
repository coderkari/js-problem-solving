let ab = '6 24'.split(' ').map((n) => parseInt(n))
let [a, b] = ab

if (b % a === 0) {
  console.log('Sao Multiplos')
} else {
  console.log('Nao sao Multiplos')
}
