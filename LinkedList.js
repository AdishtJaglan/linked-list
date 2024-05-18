class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.head) return null;
    if (this.size === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return poppedNode;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.tail = previous;
    this.size--;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.toString()); // (1) -> (2) -> (3) -> null
console.log(linkedList.getSize()); // 3
console.log(linkedList.getHead()); // Node { value: 1, nextNode: Node { value: 2, nextNode: Node { value: 3, nextNode: null } } }
console.log(linkedList.getTail()); // Node { value: 3, nextNode: null }
console.log(linkedList.at(1)); // Node { value: 2, nextNode: Node { value: 3, nextNode: null } }
console.log(linkedList.pop()); // Node { value: 3, nextNode: null }
console.log(linkedList.toString()); // (1) -> (2) -> null
console.log(linkedList.contains(2)); // true
console.log(linkedList.contains(5)); // false
console.log(linkedList.find(2)); // 1
console.log(linkedList.find(5)); // null
