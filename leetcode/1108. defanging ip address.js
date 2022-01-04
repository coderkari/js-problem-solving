var defangIPaddr = function (address) {
  let arr = []
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      arr.push('[.]')
    } else {
      arr.push(address[i])
    }
  }
  return arr.join('')
}
defangIPaddr('255.100.50.0')
