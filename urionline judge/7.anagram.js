let one = readline().toLocaleLowerCase()
let two = readline().toLocaleLowerCase()
let a = one.split('').every((t) => two.includes(t))
if (one.length === two.length && a) {
  console.log('Yes')
} else {
  console.log('No')
}
