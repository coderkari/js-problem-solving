let a = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
let b = parseInt(4)
let c = '16 3 19 19 9 2 9 4 19 13 16 3 19 19 9 2 9 4 19 13'
  .split(' ')
  .map((n) => +n)
let msg = []
c.map((i) => {
  if (i >= 1 && i <= 26) {
    msg.push(a[i - 1])
  }
})
let message = msg.join('')
console.log(message)
