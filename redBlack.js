class Node {
    constructor(key, color) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.color = color;
    }
  }
  
  // Red-Black Tree class
  class RedBlackTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a key into the tree
    insert(key) {
      const newNode = new Node(key, "red");
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
      }
    }
  
    // Insert a node into the tree
    insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
          newNode.parent = node;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          newNode.parent = node;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
fixViolation(node) {
    while (
      node !== this.root &&
      node.color === "red" &&
      node.parent.color === "red"
    ) {
      const parentNode = node.parent;
      const grandparentNode = parentNode.parent;
  
      // Case 1: Parent is a left child of the grandparent
      if (parentNode === grandparentNode.left) {
        const uncleNode = grandparentNode.right;
  
        // Case 1.1: Uncle is also red
        if (uncleNode !== null && uncleNode.color === "red") {
          grandparentNode.color = "red";
          parentNode.color = "black";
          uncleNode.color = "black";
          node = grandparentNode;
        } else {
          // Case 1.2: Uncle is black or null
          if (node === parentNode.right) {
            this.rotateLeft(parentNode);
            node = parentNode;
            parentNode = node.parent;
          }
  
          // Case 1.3: Uncle is black or null
          this.rotateRight(grandparentNode);
          parentNode.color = "black";
          grandparentNode.color = "red";
          node = parentNode;
        }
      } else {
        // Case 2: Parent is a right child of the grandparent
        const uncleNode = grandparentNode.left;
  
        // Case 2.1: Uncle is also red
        if (uncleNode !== null && uncleNode.color === "red") {
          grandparentNode.color = "red";
          parentNode.color = "black";
          uncleNode.color = "black";
          node = grandparentNode;
        } else {
          // Case 2.2: Uncle is black or null
          if (node === parentNode.left) {
            this.rotateRight(parentNode);
            node = parentNode;
            parentNode = node.parent;
          }
  
          // Case 2.3: Uncle is black or null
          this.rotateLeft(grandparentNode);
          parentNode.color = "black";
          grandparentNode.color = "red";
          node = parentNode;
        }
      }
    }
  
    this.root.color = "black";
  }}