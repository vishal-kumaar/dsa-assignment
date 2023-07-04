class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (root === null) {
    return;
  }

  const queue = []; // Queue to perform level order traversal
  queue.push({ node: root, level: 0 }); // Push root node with level 0

  let currentLevel = -1;

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level > currentLevel) {
      console.log(node.data);
      currentLevel = level;
    }

    // Enqueue the right child first (if exists) to ensure it is the last node at each level
    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }
  }
}

// Sample runs

// Example 2 -
const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);
root1.right.right.right = new Node(8);

console.log('Right view of the tree is')
printRightView(root1);

// Example 2 -
const root2 = new Node(1);
root2.left = new Node(8);
root2.left.left = new Node(7);

console.log('Right view of the tree is')
printRightView(root2);
