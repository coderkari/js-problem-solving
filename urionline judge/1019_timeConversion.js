let seconds = parseInt(556)

let rMinute = seconds % 3600
let hour = Math.floor(seconds / 3600)

let rSecond = rMinute % 60
let minute = Math.floor(rMinute / 60)

console.log(`${hour}:${minute}:${rSecond}`)
