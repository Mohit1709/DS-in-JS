class DoublyLL {
  constructor() {
    // Declaring Doubly LinkList Node
    class node {
      constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
      }
    }

    let head = null,
      tail = null;

    this.insert = (...values) => {
      for (let data of values) {
        // Checking if the list is empty
        if (head === null) head = tail = new node(data);
        else {
          // inserting node at tail
          tail.next = new node(data);
          tail.next.prev = tail;
          tail = tail.next;
        }
      }
    };

    this.delete = (...values) => {
      for (let data of values) {
        // Checking if the list is Empty
        if (head === null) return null;
        else {
          let cur = head;
          // finding the value in the list
          for (; cur && cur.data !== data; cur = cur.next);

          // if value founded
          if (cur) {
            // Checking if the value is in head node
            cur.prev ? (cur.prev.next = cur.next) : (head = head.next);
            // checking if the value is in tail node
            cur.next ? (cur.next.prev = cur.pev) : (tail = tail.prev);
          }
        }
      }
    };

    // function to print the values of list
    // which takes an number as argument for selection the direction of traversing
    // by Default it is 1 if the value is negative it traverse in reverse order
    this.traverse = (direction = 1) => {
      // Checking if the list is Empty
      if (head === null) return null;

      // Printing all data of list
      for (
        let cur = direction >= 0 ? head : tail;
        cur;
        cur = direction >= 0 ? cur.next : cur.prev
      )
        console.log(cur.data);
    };
  }
}
