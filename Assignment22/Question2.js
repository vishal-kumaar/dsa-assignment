class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function flipBinaryTree(root) {
  if (root === null) {
    return null;
  }

  // Base case: If the node is a leaf node, return it
  if (root.left === null && root.right === null) {
    return root;
  }

  // Recursively flip the left and right subtrees
  let flippedLeft = flipBinaryTree(root.left);
  let flippedRight = flipBinaryTree(root.right);

  // Rotate the tree by swapping left and right children
  root.left = flippedRight;
  root.right = flippedLeft;

  return root;
}

// Function to perform inorder traversal of the binary tree
function inorderTraversal(root) {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left);
  console.log(root.data);
  inorderTraversal(root.right);
}

// Example 1:

// Create the binary tree
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

console.log("Original Binary Tree (Inorder Traversal):");
inorderTraversal(root1);

// Flip the binary tree
let flippedTree1 = flipBinaryTree(root1);

console.log("Flipped Binary Tree (Inorder Traversal):");
inorderTraversal(flippedTree1);

// Example 2:

// Create the binary tree
let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.right.left = new Node(4);
root2.right.right = new Node(5);

console.log("Original Binary Tree (Inorder Traversal):");
inorderTraversal(root2);

// Flip the binary tree
let flippedTree2 = flipBinaryTree(root2);

console.log("Flipped Binary Tree (Inorder Traversal):");
inorderTraversal(flippedTree2);