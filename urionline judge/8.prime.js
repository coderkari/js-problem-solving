const prime = parseInt(readline())
let isPrime = true
for (let index = 2; index < prime; index++) {
  if (prime % index === 0) {
    isPrime = false
    break
  }
}
if (isPrime) {
  console.log('Yes')
} else {
  console.log('No')
}
