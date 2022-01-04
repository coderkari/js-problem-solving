var reverseOnlyLetters = function (s) {
  let arr = Array(s.length).fill()
  for (let i = 0; i < s.length; i++) {
    if (!/[A-Za-z]/.test(s[i])) {
      arr[i] = s[i]
    }
  }
  let arr2 = []
  for (let j = s.length - 1; j >= 0; j--) {
    if (/[A-Za-z]/.test(s[j])) {
      arr2.push(s[j])
    }
  }
  let arr2Index = 0
  for (let k = 0; k < arr.length; k++) {
    if (!arr[k]) {
      arr[k] = arr2[arr2Index]
      arr2Index++
    }
  }
  return arr.join('')
}

reverseOnlyLetters('7_28]')
