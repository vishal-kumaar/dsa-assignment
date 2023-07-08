class TreeNode {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

function connectNodes(root) {
  if (!root) {
    return null;
  }

  let queue = [root];

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i < size - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
}

function printConnectedNodes(root) {
  let current = root;

  while (current) {
    let node = current;

    while (node) {
      const nextVal = node.next ? node.next.val : -1;
      process.stdout.write(node.val + " → " + nextVal + "\n");
      node = node.next;
    }

    current = current.left;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const connectedRoot = connectNodes(root);

printConnectedNodes(connectedRoot);
