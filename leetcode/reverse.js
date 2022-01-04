var reverse = function (x) {
  let number =
    parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
  if (number >= -(2 ** 31) && number <= 2 ** 31 - 1) {
    return number
  } else {
    return 0
  }
}
console.log(reverse(1534236469))
