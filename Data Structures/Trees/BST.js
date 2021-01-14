class BST {
  constructor() {
    // Declaring the node of BST
    class node {
      constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }

    let root = null;

    this.insert = (...values) => {
      // iterating through each data of values
      for (let data of values) {
        if (root === null) root = new node(data);
        else {
          let cur = root,
            parent = root;
          // iterating till the leaf node
          while (cur) {
            parent = cur;
            cur = data < cur.data ? cur.left : cur.right;
          }
          // setting the right place to store data
          if (data < parent.data) parent.left = new node(data);
          else parent.right = new node(data);
        }
      }
    };

    // inorder traversing through BST
    this.traverse = (cur = root) => {
      if (cur.left !== null) this.traverse(cur.left);

      console.log(cur.data);

      if (cur.right !== null) this.traverse(cur.right);
    };
  }
}
