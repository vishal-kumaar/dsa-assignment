function calculateDepth(preorder) {
  let index = 0; // Initialize index to keep track of current position in the preorder string

  // Recursive helper function to calculate depth
  function calculateDepthHelper() {
    if (index >= preorder.length) {
      return 0; // Reached the end of the preorder string
    }

    if (preorder[index] === "l") {
      index++; // Move to the next character
      return 0; // Leaf node has depth 0
    }

    if (preorder[index] === "n") {
      index++; // Move to the next character
      const leftSubtreeDepth = calculateDepthHelper(); // Calculate depth of left subtree
      const rightSubtreeDepth = calculateDepthHelper(); // Calculate depth of right subtree

      // Depth of internal node is 1 + maximum depth of its subtrees
      return 1 + Math.max(leftSubtreeDepth, rightSubtreeDepth);
    }
  }

  return calculateDepthHelper(); // Call the helper function to calculate depth
}

// Example usage:

// Example 1 -
const preorder1 = "nlnll";
const depth1 = calculateDepth(preorder1);
console.log(depth1);

// Example 2 -
const preorder2 =  'nlnnlll';
const depth2 = calculateDepth(preorder2);
console.log(depth2);