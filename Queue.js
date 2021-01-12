class Queue {
  constructor() {
    class node {
      constructor(data) {
        this.data = data;
        this.back = null;
      }
    }

    let front = null,
      rear = null;

    this.enqueue = (...values) => {
      for (let data of values) {
        if (front === null) rear = front = new node(data);
        else rear = rear.back = new node(data);
      }
    };

    this.dequeue = () => {
      if (front === null) return null;
      else front = front.back;
    };

    this.print = () => {
      for (let cur = front; cur; cur = cur.back) console.log(cur.data);
    };
  }
}

let a = new Queue();
a.enqueue(10, 20, 40, 0, 20);
a.print();
