class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (root === null) {
    return;
  }

  // Create an empty stack to keep track of nodes and their respective paths
  const stack = [];
  // Create an empty hashmap to store the current path from root to each node
  const pathMap = new Map();

  // Push the root node along with its path to the stack
  stack.push([root, `${root.data}`]);

  while (stack.length > 0) {
    const [node, path] = stack.pop();

    // If the current node is a leaf node, print the path from root to this node
    if (node.left === null && node.right === null) {
      console.log(path);
    }

    // Add the current node and its path to the hashmap
    pathMap.set(node, path);

    // Push the right child to the stack along with its updated path
    if (node.right !== null) {
      stack.push([node.right, path + "->" + node.right.data]);
    }

    // Push the left child to the stack along with its updated path
    if (node.left !== null) {
      stack.push([node.left, path + "->" + node.left.data]);
    }
  }
}

// Example:

// Create the binary tree
let root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

// Print all root-to-leaf paths
console.log("Root-to-Leaf Paths:");
printRootToLeafPaths(root);
