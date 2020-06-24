function thirdLargest(tree) {
  /*
  We have to iterate recursively and traverse through the tree. We also need to track the three highest values in the tree at every step. Use an array [key1, key2, key3]. Keep this array sorted key1 < key2 <key3.
  
  For every node, perform the comparisons:
  
  if node.key > key1 && node.key < key2, then
  key1 = node.key
  
  else if node.key > key2 && node.key < key3, then
  key1 = key2, key2 = node.key
  
  else if node.key > key3, then
  key1 = key2, key2 = key3, key3 = node.key
  
  if node.left, then
  run thirdLargest on node.left, passing down modified array
  
  if node.right, then
  run thirdLargest on node.right, passing down modified array
  
  at end, return key1
  */
  
  // The array is first filled with the number stored in the root.
  let top3arr = [tree.key, tree.key, tree.key];
  _checkValue(tree, top3arr);
  return console.log(top3arr[0]);
}

function _checkValue(node, arr) {
  // Check the value of the node and modify the value of the array appropriately.
  if (node.key > arr[0] && node.key < arr[1]) {
    arr[0] = node.key;
  }
  else if (node.key > arr[1] && node.key < arr[2]) {
    arr[0] = arr[1];
    arr[1] = node.key;
  }
  // Once the largest value is found, change the numbers in the array to replace arr[2] to the largest number. The number that was previously in arr[2] will be moved to arr[1].
  else if (node.key > arr[2]) {
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = node.key;
  }
  // If there are further nodes to the left or right, pass them into _checkValue to determine if they are large numbers.
  if (node.left) {
    _checkValue(node.left, arr);
  }
  if (node.right) {
    _checkValue(node.right, arr);
  }
}

module.exports = { thirdLargest }

/*
Reference
https://github.com/thinkful-ei-firefly/DSA-BST-Julian-Jessica/blob/master/BSThelperFns.js
*/