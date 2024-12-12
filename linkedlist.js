class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}