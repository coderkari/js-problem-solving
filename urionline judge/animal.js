'use strict'
process.stdin.resume()
process.stdin.setEncoding('utf-8')

function print(x) {
  console.log(x)
}
let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin
})
process.stdin.on('end', () => {
  inputString = inputString.split('\n')
  main()
})
function readline() {
  return inputString[currentLine++]
}

// ************************ Code Start ***************************
function main() {
  /* *******************start here************************* */
  const data = [
    {
      group: 'vertebrado',
      subGroup: 'ave',
      genesis: 'carnivoro',
      name: 'aguia',
    },
    {
      group: 'vertebrado',
      subGroup: 'ave',
      genesis: 'onivoro',
      name: 'pomba',
    },
    {
      group: 'vertebrado',
      subGroup: 'mamifero',
      genesis: 'onivoro',
      name: 'homem',
    },
    {
      group: 'vertebrado',
      subGroup: 'mamifero',
      genesis: 'herbivoro',
      name: 'vaca',
    },
    {
      group: 'invertebrado',
      subGroup: 'inseto',
      genesis: 'hematofago',
      name: 'pulga',
    },
    {
      group: 'invertebrado',
      subGroup: 'inseto',
      genesis: 'herbivoro',
      name: 'lagarta',
    },
    {
      group: 'invertebrado',
      subGroup: 'anelideo',
      genesis: 'hematofago',
      name: 'sanguessuga',
    },
    {
      group: 'invertebrado',
      subGroup: 'anelideo',
      genesis: 'onivoro',
      name: 'minhoca',
    },
  ]
  let arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push(readline().replace('\r', ''))
  }
  const findName = data.find((d) => {
    return d.group == arr[0] && d.subGroup == arr[1] && d.genesis == arr[2]
  })
  console.log(findName.name)
}
