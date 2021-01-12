class Queue {
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

    this.enqueue = (...values) => {
      // loop to iterate over the inpu Values
      for (let data of values) {
        // checking if the Queue is Empty
        if (front === null) rear = front = new node(data);
        else rear = rear.back = new node(data);
      }
    };

    this.dequeue = () => {
      // checking if the Queue is Empty
      if (front === null) return null;
      else front = front.back;
    };

    this.print = () => {
      // checking if the Queue is Empty
      if (front === null) return null;

      // Printing the values
      for (let cur = front; cur; cur = cur.back) console.log(cur.data);
    };
  }
}

let a = new Queue();
a.enqueue(10, 20, 40, 0, 20);
a.print();
