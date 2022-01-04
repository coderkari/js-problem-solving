let Pword = readline()
let arr = Pword.toLowerCase().split('')
let revarr = arr.reverse().join('')
if (Pword === revarr) {
  console.log('Yes')
} else {
  console.log('No')
}
