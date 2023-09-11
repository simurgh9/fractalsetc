class LinkedList {
  constructor() {
    this.length = 0;
    this.current = null;
  }

  add(node) {
    this.current = node.setPrev(this.current);
    return ++this.length;
  }

  *[Symbol.iterator]() {
    let cur = this.current;
    while (cur) {
      yield cur;
      cur = cur.prev;
    }
  }
}

export default LinkedList;
