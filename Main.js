const BinarySearchTree = require("./BinarySearchTree");
const { findHeight } = require("./Height");
const { thirdLargest } = require("./ThirdLargest");
const { sameBST } = require("./SameBST");

main = () => {
  let BST = new BinarySearchTree();

  /*
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  */
  
  /*
  BST.insert("e");
  BST.insert("a");
  BST.insert("s");
  BST.insert("y");
  BST.insert("q");
  BST.insert("u");
  BST.insert("e");
  BST.insert("s");
  BST.insert("t");
  BST.insert("i");
  BST.insert("o");
  BST.insert("n");
  */
  
  const inserts = [3, 1, 4, 6, 9, 2, 5, 7];
  inserts.forEach(e => BST.insert(e));

  //findHeight(BST);
  //thirdLargest(BST);

  const arr1 = [3, 5, 4, 6, 1, 0, 2]
  const arr2 = [3, 1, 5, 2, 4, 6, 0]
  sameBST(arr1, arr2);
};

return main();