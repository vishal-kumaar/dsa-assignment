class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function constructBST(values) {
  let root = null;
  for (let i = 0; i < values.length; i++) {
    root = insert(root, values[i]);
  }
  return root;
}

function insert(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }
  return root;
}

function findDistance(root, node1, node2) {
  if (root.val > node1 && root.val > node2) {
    return findDistance(root.left, node1, node2);
  }
  if (root.val < node1 && root.val < node2) {
    return findDistance(root.right, node1, node2);
  }
  if (
    (root.val >= node1 && root.val <= node2) ||
    (root.val <= node1 && root.val >= node2)
  ) {
    return findLevel(root, node1, 0) + findLevel(root, node2, 0);
  }
  return -1;
}

function findLevel(root, node, level) {
  if (!root) {
    return -1;
  }
  if (root.val === node) {
    return level;
  }
  const leftLevel = findLevel(root.left, node, level + 1);
  if (leftLevel === -1) {
    return findLevel(root.right, node, level + 1);
  }
  return leftLevel;
}

// Sample runs:-
const values1 = [8, 3, 1, 6, 4, 7, 10, 14, 13];
const node11 = 6;
const node12 = 14;

const root1 = constructBST(values1);
const distance1 = findDistance(root1, node11, node12);
console.log("The distance between the two keys =", distance1);

const values2 = [8, 3, 1, 6, 4, 7, 10, 14, 13];
const node21 = 3;
const node22 = 4;

const root2 = constructBST(values2);
const distance2 = findDistance(root2, node21, node22);
console.log("The distance between the two keys =", distance2);