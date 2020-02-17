class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if the tree is empty then this key being inserted is the root node of the 
    // tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    // If the tree already exists, start at the root,
    // and compare it to the key you want to insert
    // If the new key is less than the node's key
    // then the new node needs to live in the left-hand branch

    else if (key < this.key) {
    // if the existing node does not have a left child
    // meaning that 'if the left pointer is empty/null',
    // then we can just instantiate and insert the new node as the left child
    // of that node, passing `this` as the parent
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      // if the node has an existing left child,
      // then we recursively call the `insert` method
      // so the node is added further down the tree
      else {
        this.left.insert(key, value);
      }
    }
      // Similarly, if the new key is greater than the node's key
      // then you do the same thing, but on the right-hand side
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        }
        else {
          this.right.insert(key, value);
        }
      }
  }

  find(key) {
    if (this.key == key) {  //meaning the key you are finding happens to be the root
      return this.value;
    }
    // If the item (key) you are looking for is less than the root then follow the
    // left child.
    // If there is an existing left child, then recursively check its left and/or
    // right child until you find the item 
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // If the item (key) you are looking for is greater than the root 
    // then follow the right child
    // If there is an existing right child,
    // then recursively check its left and/or right child until you find the item

    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the BST
    else {
      throw new Error('Key Error');
    }

    // the avg time complexity of a balanced BST is O(log(n)).
    // a skewed tree results in worst case and is O(n).
    // best case is the node you want is the root and that is O(1).
  }
}