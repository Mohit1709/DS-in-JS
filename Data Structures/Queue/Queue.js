// Queue using LinkedList
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

    // function for inserting the values in queue
    this.enqueue = (...values) => {
      // loop to iterate over the inpu Values
      for (let data of values) {
        // checking if the Queue is Empty
        if (front === rear) rear = front = new node(data);
        else rear = rear.back = new node(data);
      }
    };

    // function to delete the values in queue
    this.dequeue = () => {
      // checking if the Queue is Empty
      if (front === rear) return null;
      else front = front.back;
    };

    // function to print the values of Queue
    this.traverse = () => {
      // checking if the Queue is Empty
      if (front === rear) return null;

      // Printing the values
      for (let cur = front; cur; cur = cur.back) console.log(cur.data);
    };
  }
}
