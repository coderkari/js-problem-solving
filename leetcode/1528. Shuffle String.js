var restoreString = function (s, indices) {
  let obj = {}
  let arr = []
  for (let i = 0; i < indices.length; i++) {
    obj[indices[i]] = s[i]
  }
  for (const iterator in obj) {
    arr.push(obj[iterator])
  }
  return arr.join('')
}
restoreString('art', [1, 0, 2])
