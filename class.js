class Student {
  constructor(name, age, adept) {
    this.name = name
    this.age = age
    this.adept = adept
  }
  quality = () => {
    console.log(`Student name ${this.name} and age is ${this.age} years old`)
  }
  static goodQuality = (goodat) => {
    console.log(`best qualit is ${goodat}`)
  }
}

let karimul = new Student('karimul', 26)
let labib = new Student('labib', 2)
// labib.quality()
Student.goodQuality('mathematics')

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    console.log(`${this.x} and ${this.y}`)
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    console.log({ a }, { b })
    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

console.log(Point.distance(p1, p2)) // 7.0710678118654755
