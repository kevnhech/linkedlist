class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.count = 0;
  }

  append(value) {
    const newNode = new Node(value, null);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
    this.count++;
  }

  prepend(value) {
    if (!this.headNode) {
      const newNode = new Node(value, null);
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const newNode = new Node(value, this.headNode);
      this.headNode = newNode;
    }
    this.count++;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
