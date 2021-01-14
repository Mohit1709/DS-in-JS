// Linked List
class LinkedList {
  constructor() {
    let head = null,
      tail = null;
    // initializing a node for Linked list which inputs a value
    class node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    this.insert = (...values) => {
      // loop to iterate over the inpu Values
      for (let data of values) {
        // checking if the list is Empty
        if (head === null) tail = head = new node(data);
        else tail = tail.next = new node(data);

        // same as normal list only differ is the last node point to head
        tail.next = head;
      }
    };

    this.delete = (...values) => {
      // loop to iterate over the inpu Values
      for (let data of values) {
        let prev = head,
          cur = head;

        // Checking if the list is Empty
        if (head === null) return null;
        // Checking if the value is at start of list
        else if (data === head.data) head = head.next;
        else {
          for (; cur && cur.data !== data; cur = cur.next) prev = cur;

          if (cur) prev.next = cur.next;
        }

        // same as normal list only differ is the last node point to head
        tail.next = head;
      }
    };

    // function to print the values of list
    this.traverse = () => {
      // Checking if the list is Empty
      if (head === null) return null;

      // Printing the values
      let cur = head;
      do {
        console.log(cur.data);
        cur = cur.next;
      } while (cur !== head);
    };
  }
}
