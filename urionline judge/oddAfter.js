let a = parseInt(8)

let arr = []

for (let i = a; i <= a + 100; i++) {
  if (i % 2 != 0) {
    console.log(i)
    arr.push(i)
    if (arr.length == 6) break
  }
}
