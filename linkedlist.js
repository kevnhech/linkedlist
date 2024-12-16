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

  size() {
    return this.count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    let currentNode = this.headNode;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    if (currentNode != null) return currentNode;
  }

  pop() {
    let currentNode = this.headNode;
    for (let i = 0; i < this.count - 2; i++) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.tailNode = currentNode;
    this.count--;
  }

  contains(value) {
    let currentNode = this.headNode;
    let bool = false;
    for (let i = 0; i < this.count; i++) {
      if (value == currentNode.value) bool = true;
      currentNode = currentNode.nextNode;
    }
    return bool;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
