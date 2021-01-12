class doublyLL {
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

    this.print = () => {
      // Checking if the list is Empty
      if (head === null) return null;

      // Printing all data of list
      for (let cur = head; cur; cur = cur.next) console.log(cur.data);
    };
  }
}
