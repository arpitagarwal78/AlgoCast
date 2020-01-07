// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
      this.head = new Node(data, this.head)
  }

  size() {
    let node = this.head
    let counter = 0
    while(node) {
      counter++;
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    let prevNode = null
    while(node) { // move till last null value
      prevNode = node
      node = node.next
    }
    return prevNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if(this.head){
      this.head = this.head.next
    }
  }

  removeLast() {
    if(!this.head) {
      return;
    }

    if(!this.head.next) {
      this.head = null
      return;
    }

    let previous = this.head
    let node = this.head.next
    while(node.next) { // early check to next node
      previous = node
      node = node.next

    }
    previous.next = null
  }

  insertLast(data) {
    let node = this.getLast()
    if(node) {
      node.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let node = this.head
    let counter = 0

    while(node){
      if(index == counter) {
        return node
      }
      counter++
      node= node.next
    }
    return null
  }

  removeAt(index) {
    if(!this.head){
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next
  }
}

module.exports = { Node, LinkedList };