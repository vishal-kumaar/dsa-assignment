class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printBottomView(root) {
  if (root === null) {
    return;
  }

  const map = new Map(); // Map to store nodes based on their horizontal distance
  const queue = []; // Queue to perform level order traversal
  queue.push({ node: root, hd: 0 }); // Push root node with horizontal distance 0

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    // Update the map with the current node for its horizontal distance
    map.set(hd, node.data);

    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  // Sort the map entries based on the horizontal distance
  const sortedEntries = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);

  // Print the bottom view nodes in the correct order of horizontal distances
  for (const [_, value] of sortedEntries) {
    console.log(value);
  }
}

// Sample runs

// Example 1 -
const root1 = new Node(20);
root1.left = new Node(8);
root1.right = new Node(22);
root1.left.left = new Node(5);
root1.left.right = new Node(3);
root1.right.right = new Node(25);
root1.left.right.left = new Node(10);
root1.left.right.right = new Node(14);

printBottomView(root1);

// Example 2 -
const root2 = new Node(20);
root2.left = new Node(8);
root2.right = new Node(22);
root2.left.left = new Node(5);
root2.left.right = new Node(3);
root2.right.left = new Node(4);
root2.right.right = new Node(25);
root2.left.right.left = new Node(10);
root2.left.right.right = new Node(14);

printBottomView(root2);
