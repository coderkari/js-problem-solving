let a = [7, -5, 6, -4, 12]

let arr = []
a.forEach((n) => {
  if (n % 2 === 0) {
    arr.push(n)
  }
})
console.log(arr.length + ' valores pares')
