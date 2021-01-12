class Vector {
  constructor() {
    let head = null,
      tail = null;

    class node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    this.insert = (...values) => {
      for (let data of values) {
        if (head === null) tail = head = new node(data);
        else tail = tail.next = new node(data);
      }
    };

    this.delete = (...values) => {
      for (let data of values) {
        let prev = head,
          cur = head;

        if (head === null) return null;
        else if (data === head.data) head = head.next;
        else for (; cur && cur.data !== data; cur = cur.next) prev = cur;

        if (cur) prev.next = cur.next;
      }
    };

    this.print = () => {
      if (head === null) return null;

      for (let cur = head; cur; cur = cur.next) console.log(cur.data);
    };
  }
}
