// Circular Queue using Linked List
class circularQueue {
  constructor() {
    // Initializing the node for Queue
    class node {
      constructor(data) {
        this.data = data;
        this.back = null;
      }
    }

    let front = null,
      rear = null;

    // function for inserting the values in queue
    this.enqueue = (...values) => {
      // loop to iterate over the inpu Values
      for (let data of values) {
        // checking if the Queue is Empty
        if (front === rear) rear = front = new node(data);
        else rear = rear.back = new node(data);
        // same as normal Queue only differ is the last node point to front
        rear.back = front;
      }
    };

    // function to delete the values in queue
    this.dequeue = () => {
      // checking if the Queue is Empty
      if (front === rear) return null;
      else front = front.back;

      // same as normal Queue only differ is the last node point to front
      rear.back = front;
    };

    // function to print the values of Queue
    this.traverse = () => {
      // checking if the Queue is Empty
      if (front === rear) return null;

      // Printing the values
      let cur = front;
      do {
        console.log(cur.data);
        cur = cur.back;
      } while (cur !== front);
    };
  }
}
