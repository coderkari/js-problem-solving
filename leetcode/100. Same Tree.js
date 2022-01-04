class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class simpleTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      return (this.root = newNode)
    }
    let node = this.root
    let queue = []
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      } else {
        return (node.left = newNode)
      }
      if (node.right) {
        queue.push(node.right)
      } else {
        return (node.right = newNode)
      }
    }
  }
  BFS() {
    if (!this.root) return undefined
    let root = this.root,
      data = [],
      queue = []
    queue.push(root)
    while (queue.length) {
      root = queue.shift()
      data.push(root.val)
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
    return data
  }
}

let node1 = new simpleTree()
let node2 = new simpleTree()
let p = [1, 2, 3]
let q = [1, 2, 3]
p.map((n) => node1.insert(n))
q.map((n) => node2.insert(n))

var isSameTree = function (p, q) {
  function check(node) {
    let root = node,
      data = [],
      queue = []
    queue.push(root)
    while (queue.length) {
      root = queue.shift()
      data.push(root.val)
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
    return data
  }
  let arr1 = check(p)
  let arr2 = check(q)
  const result = (arr1, arr2) =>
    arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])

  return result(arr1, arr2)
}
console.log(isSameTree(node1.root, node2.root))

// var isSameTree = function (p, q) {
//   if (!p && !q) {
//     return true
//   }
//   if (!p || !q) {
//     return false
//   }
//   if (p.val === q.val) {
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
//   }
//   return false
// }
// console.log(isSameTree(node1.root, node2.root))
