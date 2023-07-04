class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printLeftView(root) {
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

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
}

// Sample runs

// Example 1 -
const root1 = new Node(4);
root1.left = new Node(5);
root1.right = new Node(2);
root1.right.left = new Node(3);
root1.right.right = new Node(1);
root1.right.left.left = new Node(6);
root1.right.left.right = new Node(7);

printLeftView(root1);

// Example 2 -
const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.right = new Node(4);
root2.left.right.right = new Node(5);
root2.left.right.right.right = new Node(6);

printLeftView(root2);
