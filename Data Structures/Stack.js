// javaScript itself works as an Stack,
// as Arrays of js are objects with method like,
//  push and pop method just as stack
// but with no restriction

class Stack {
  constructor() {
    // implementing Stack using array
    let stack = [],
      top = -1;

    this.push = (...values) => {
      // looping over values to store it in stack
      for (let data of values) stack[++top] = data;
    };

    this.pop = () => {
      // checking if the stack is in underflow
      if (top === -1) return null;

      // storing the last element of stack
      let temp = stack[top--];
      // deliting the last element of stack
      stack.length--;

      return temp;
    };

    // function to return the top value without deleting it
    this.peep = () => stack[top];

    // function to change the value of top of stack
    this.change = (val) => {
      // checking if the stack is underflow
      if (top === -1) return -1;

      stack[top] = val;
    };

    // function to print the values of stack
    this.traverse = () => {
      // printing all the values of stack
      for (let data of stack) console.log(data);
    };
  }
}
