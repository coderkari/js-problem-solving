var maxDepth = function (root) {
  class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  class simpleTree {
    constructor() {
      this.root = null
    }
    insert(value) {
      let newNode = new Node(value)
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
        data.push(root.value)
        if (root.left) queue.push(root.left)
        if (root.right) queue.push(root.right)
      }
      return data
    }
    DFSPostOrder() {
      let data = []
      function traverse(node) {
        node.left && traverse(node.left)
        node.right && traverse(node.right)
        data.push(node.value)
      }
      traverse(this.root)
      return data
    }
  }
  let root1 = new simpleTree()
  for (let i = 0; i < root.length; i++) {
    root1.insert(root[i])
  }
  console.log(root1)
  console.log(root1.DFSPostOrder())
}
maxDepth([3, 9, 20, null, null, 15, 7])
