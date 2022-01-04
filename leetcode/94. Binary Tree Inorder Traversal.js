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
  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.val)
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }
  DFSInorder() {
    let data = []
    function traverse(node) {
      node.left && traverse(node.left)
      data.push(node.val)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

let node1 = new simpleTree()
let node2 = new simpleTree()

let p = [1, null, 2]
p.map((n) => node1.insert(n))

var inorderTraversal = function (root) {
  let data = []
  function traverse(node) {
    if (node) {
      node.left && traverse(node.left)
      if (node.val) data.push(node.val)
      node.right && traverse(node.right)
    }
  }
  traverse(root)
  return data
}
console.log(inorderTraversal(node1.root))
