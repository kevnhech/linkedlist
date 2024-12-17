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

  find(value) {
    let currentNode = this.headNode;
    let idx = null;
    for (let i = 0; i < this.count; i++) {
      if (value == currentNode.value) idx = i;
      currentNode = currentNode.nextNode;
    }
    return idx;
  }

  toString() {
    let currentNode = this.headNode;
    let str = "";
    for (let i = 0; i < this.count; i++) {
      if (currentNode.value && currentNode.nextNode != null) {
        str += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      } else {
        str += `( ${currentNode.value} ) -> null`;
      }
    }
    return str;
  }

  insertAt(value, index) {
    let newNode = new Node(value, null);
    if (index > this.count - 1) {
      return "This index position doesn't exist. Please try again with a lower index.";
    } else if (index == 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else if (index == this.count - 1) {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    } else {
      let currentNode = this.headNode;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    }
    this.count++;
  }

  removeAt(index) {
    let currentNode = this.headNode;
    if (this.count == 1) {
      return "The list is too small to remove any nodes.";
    } else if (index > this.count - 1) {
      return "This index position doesn't exist. Please try again with a lower index.";
    } else if (index == 0) {
      this.headNode = this.headNode.nextNode;
    } else if (index == this.count - 1) {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      this.tailNode = currentNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
    this.count--;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
