function checkTraversalEquality(inorder, preorder, postorder) {
  // Base case: If any of the traversals is empty, return true
  if (inorder.length === 0 || preorder.length === 0 || postorder.length === 0) {
    return "Yes";
  }

  // Base case: If the lengths of the traversals are not equal, return false
  if (
    inorder.length !== preorder.length ||
    inorder.length !== postorder.length
  ) {
    return "No";
  }

  // Check if the first and last elements of the traversals are equal
  if (preorder[0] !== postorder[postorder.length - 1]) {
    return "No";
  }

  // Find the root index in the inorder traversal
  const rootIndex = inorder.indexOf(preorder[0]);

  // Divide the inorder traversal into left and right subtrees
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  // Divide the preorder traversal based on the sizes of the left and right subtrees
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  // Divide the postorder traversal based on the sizes of the left and right subtrees
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(
    leftInorder.length,
    postorder.length - 1
  );

  // Recursively check the equality for the left and right subtrees
  const isLeftSubtreeEqual = checkTraversalEquality(
    leftInorder,
    leftPreorder,
    leftPostorder
  );
  const isRightSubtreeEqual = checkTraversalEquality(
    rightInorder,
    rightPreorder,
    rightPostorder
  );

  // Return true if both subtrees are equal, otherwise false
  if (isLeftSubtreeEqual && isRightSubtreeEqual) {
    return "Yes";
  } else {
    return "No";
  }
}

// Example 1:

const inorder = [4, 2, 5, 1, 3];
const preorder = [1, 2, 4, 5, 3];
const postorder = [4, 5, 2, 3, 1];

console.log(checkTraversalEquality(inorder, preorder, postorder)); // Output: true


// Example 2:
const inorder2 = [4, 2, 5, 1, 3];
const preorder2 = [1, 5, 4, 2, 3];
const postorder2 = [4, 1, 2, 3, 5];

console.log(checkTraversalEquality(inorder2, preorder2, postorder2)); // Output: false
