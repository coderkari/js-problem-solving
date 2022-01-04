let a = parseInt(19)

let ddd = {
  61: 'Brasilia',
  71: 'Salvador',
  11: 'Sao Paulo',
  21: 'Rio de Janeiro',
  32: 'Juiz de Fora',
  19: 'Campinas',
  27: 'Vitoria',
  31: 'Belo Horizonte',
}

let isHas = 'DDD nao cadastrado'

for (const key in ddd) {
  if (key == a) {
    isHas = ddd[a]
  }
}

console.log(isHas)
