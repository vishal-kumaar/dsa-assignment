class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function convertToDLL(root) {
  if (!root) {
    return null;
  }

  let head = null;
  let prev = null;

  function convertNode(node) {
    if (!node) {
      return;
    }

    convertNode(node.left);

    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
      node.left = prev;
    }
    prev = node;

    convertNode(node.right);
  }

  convertNode(root);

  head.left = prev;
  prev.right = head;

  return head;
}

function printDLL(head) {
  let current = head;
  let values = [];

  do {
    values.push(current.val);
    current = current.right;
  } while (current !== head);

  console.log(values.join(" "));
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

const head = convertToDLL(root);

printDLL(head);
