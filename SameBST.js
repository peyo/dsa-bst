// O(n^n)
// Reference:
// https://www.geeksforgeeks.org/check-if-two-given-key-sequences-construct-same-bsts/
// There's a faster way of solving this:
// https://www.geeksforgeeks.org/check-for-identical-bsts-without-building-the-trees/

function sameBST(arr1, arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  }

  if (arr1.length == 0) {
    return true;
  }

  if (arr1[0] !== arr2[0]) {
    return false;
  }

  arrLeft1 = [];
  arrRight1 = [];
  arrLeft2 = [];
  arrRight2 = [];

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < arr1[0]) {
      arrLeft1.push(arr1[i])
    }

    else {
      arrRight1.push(arr1[i])
    }

    if (arr2[i] < arr2[0]) {
      arrLeft2.push(arr2[i])
    }

    else {
      arrRight2.push(arr2[i])
    }
  }

  function _sameBST(arrLeft1, arrLeft2, arrRight1, arrRight2) {
    return sameBST(arrLeft1, arrLeft2) && sameBST(arrRight1, arrRight2) 
  }

  return _sameBST(arrLeft1, arrLeft2, arrRight1, arrRight2)
}

module.exports = { sameBST }

/*

THIS SOLUTION DOES NOT USE ARRAYS OR LINKED LISTS. JUST SIMPLE RECURSION AND VALUE COMPARISONS.

function sameBST(arr1, arr2) {
  let sameRoots = false;

  // Check to see if the root is the same on both trees.
  let root = null;
  if (arr1[0] === arr2[0]) {
    sameRoots = true;
    root = arr1[0];
  }

  if (sameRoots) {
    return _checkNodes(root, arr1, arr2) === undefined;
  }

  if (!sameRoots) {
    console.log(`Different BSTs.`);
    return;
  }
}

  // Check to see if the first left node on both trees are the same. Also, check to see if the first right node on both trees are the same.
function _checkNodes(root, arr1, arr2) {
  const firstLeft1 = arr1.find((val) => val < root);
  const firstLeft2 = arr2.find((val) => val < root);
  const firstRight1 = arr1.find((val) => val > root);
  const firstRight2 = arr2.find((val) => val > root);

  if (firstLeft1 !== firstLeft2 || firstRight1 !== firstRight2) {
    return console.log(`Different BSTs.`);
  }

  // Check to see if there are the same amount of nodes for both trees. If the length is not the same, return `Different BSTs`.
  const arr1Left = arr1.filter((val) => val < root && val !== firstLeft1);
  const arr2Left = arr2.filter((val) => val < root && val !== firstLeft2);
  const arr1Right = arr1.filter((val) => val > root && val !== firstRight1);
  const arr2Right = arr2.filter((val) => val > root && val !== firstRight2);

  if (
    arr1Left.length !== arr2Left.length ||
    arr1Right.length !== arr2Right.length
  ) {
    return console.log(`Different BSTs.`);
  }

  if (arr1Left.length > 0) {
    _checkNodes(firstLeft1, arr1Left, arr2Left);
  }

  if (arr1Right.length > 0) {
    _checkNodes(firstRight1, arr1Right, arr2Right);
  }

  return console.log(`Same BSTs.`);
}

module.exports = { sameBST };
*/

/*
Reference:
https://github.com/thinkful-ei-firefly/DSA-BST-Julian-Jessica/blob/master/BSThelperFns.js
*/