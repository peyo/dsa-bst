function findHeight(BST) {
  // Check every possible branch of the tree
  // Increment a counter for every step down the tree
  // Return the maximum number found
  // Time complexity O(n)
  const distances = [];
  _leafDist(BST, 0, distances);
  
  console.log(Math.max(...distances));
  return;
}

function _leafDist(t, count = 0, arr = []) {
  if (!t) {
    arr.push(count);
  } else {
    count++;
    _leafDist(t.left, count, arr);
    _leafDist(t.right, count, arr);
  }
}

module.exports = { findHeight }