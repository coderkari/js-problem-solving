let a = parseFloat(-25.02)

if (a < 0 || a > 100) {
  console.log('Fora de intervalo')
}

if (a >= 0 && a <= 25) {
  console.log('Intervalo (0,25)')
}

if (a > 25 && a <= 50) {
  console.log('Intervalo (25,50)')
}

if (a > 50 && a <= 75) {
  console.log('Intervalo (50,75)')
}

if (a > 75 && a <= 100) {
  console.log('Intervalo (75,100)')
}
 