class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeToDLL(root) {
  if (root === null) {
    return null;
  }

  let prev = null;

  function convertToDLL(node) {
    if (node === null) {
      return;
    }

    convertToDLL(node.left);

    if (prev === null) {
      // This is the first node (leftmost node in inorder traversal)
      root = node;
    } else {
      // Make the current node the right child of the previous node
      node.left = prev;
      prev.right = node;
    }

    prev = node;

    convertToDLL(node.right);
  }

  convertToDLL(root);

  return root;
}

// Create the binary tree
let root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

// Convert the binary tree to DLL
let dll = binaryTreeToDLL(root);

// Traverse the DLL and print the data
let current = dll;
while (current !== null) {
  console.log(current.data);
  current = current.right;
}
