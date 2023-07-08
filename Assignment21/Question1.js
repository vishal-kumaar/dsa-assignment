class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function convertToBST(root) {
  const inorder = [];
  inorderTraversal(root, inorder);
  inorder.sort((a, b) => a - b);
  const index = { i: 0 };
  inorderTraversalAndReplace(root, inorder, index);
}

function inorderTraversal(node, result) {
  if (node) {
    inorderTraversal(node.left, result);
    result.push(node.val);
    inorderTraversal(node.right, result);
  }
}

function inorderTraversalAndReplace(node, inorder, index) {
  if (node) {
    inorderTraversalAndReplace(node.left, inorder, index);
    node.val = inorder[index.i];
    index.i++;
    inorderTraversalAndReplace(node.right, inorder, index);
  }
}

function printPreOrderTraversal(root) {
  if (root === null) {
    return;
  }

  const stack = [];
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

convertToBST(root);

printPreOrderTraversal(root);