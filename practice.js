class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // Insertion 
  insert(key, value) {
    if (this.key == null) {  // if BST is empty insert key/value pair as root node 
      this.key = key;
      this.value = value;
    }   

    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }

    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  //Retrieval 
  find(key) {
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('key error');
    }
  }
  // Insertion
  insert(key, value) {
    if (this.key == null) {  // base case
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {  
      if (this.left == null) {  // base case
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key,value);
      }
    }
    else {
      if (this.right == null) {  // base case
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  // Retrieval 
  find(key) {
    if (this.key == key) { // base case
      return this.value;
    }
    else if (key < this.key && this.left) {
      this.left.find(key);
    }
    else if (key > this.key && this.right) {
      this.right.find(key);
    }
    else { throw new Error('Key not found') }
  }

  insert(key, value) {
    if () {}
    else if () {
      if () {}
      else {}
    }
    else {
      if () {}
      else {}
    }
  }

  find(key) {
    if () {}
    else if () {}
    else if () {}
    else {}
  }

  insert(key, value) {  // 3 main conditions with 2 nested conditions in else/if else
    if () {}
    else if () {
      if () {}
      else {}
    }
    else {
      if () {}
      else {}
    }
  }

  find(key) {  // 4 parent condition if, else if, else if, else
    if () {}
    else if () {}
    else if () {}
    else {}
  }

  insert(key, value) {
    if () {}
    else if () {
      if () {}
      else {}
    }
    else {
      if () {}
      else {}
    }
  }

  find(key) {
    if () {}
    else if () {}
    else if () {}
    else {}
  }

  insert(key, value) {
    if () {}
    else if () {
      if () {}
      else {}
    }
    else {
      if () {}
      else {}
    }
  }
}