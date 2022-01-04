let inputValue = '10 15'.split(' ').map((n) => +n)

let [hour, minute] = inputValue

let hourAngle = hour * 30 + minute * 0.5
let minuteAngle = minute * 6
let angle = Math.abs(hourAngle - minuteAngle)
let mainAngle = Math.min(angle, 360 - angle).toFixed(7)
console.log(mainAngle)
