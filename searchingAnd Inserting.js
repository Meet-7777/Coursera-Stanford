function Node(key) {
  return {
    key: key,
    left: null,
    right: null,
    height: 1
  };
}

function AVLTree() {
  let root = null;

  function getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  function getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return getHeight(node.left) - getHeight(node.right);
  }

  function rotateLeft(z) {
    const y = z.right;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height = Math.max(getHeight(z.left), getHeight(z.right)) + 1;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

    return y;
  }

  function rotateRight(z) {
    const y = z.left;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    z.height = Math.max(getHeight(z.left), getHeight(z.right)) + 1;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

    return y;
  }

  function insertNode(node, key) {
    if (node === null) {
      return Node(key);
    }

    if (key < node.key) {
      node.left = insertNode(node.left, key);
    } else {
      node.right = insertNode(node.right, key);
    }

    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;

    const balanceFactor = getBalanceFactor(node);

    if (balanceFactor > 1 && key < node.left.key) {
      return rotateRight(node);
    }

    if (balanceFactor < -1 && key > node.right.key) {
      return rotateLeft(node);
    }

    if (balanceFactor > 1 && key > node.left.key) {
      node.left = rotateLeft(node.left);
      return rotateRight(node);
    }

    if (balanceFactor < -1 && key < node.right.key) {
      node.right = rotateRight(node.right);
      return rotateLeft(node);
    }

    return node;
  }

  function insert(key) {
    root = insertNode(root, key);
  }

  function searchNode(node, key) {
    if (node === null || node.key === key) {
      return node;
    }

    if (key < node.key) {
      return searchNode(node.left, key);
    } else {
      return searchNode(node.right, key);
    }
  }

  function search(key) {
    return searchNode(root, key);
  }

  return {
    insert,
    search
  };
}

// Usage example:
const tree = AVLTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);

console.log(tree.search(7)); // { key: 7, left: null, right: null, height: 1 }
