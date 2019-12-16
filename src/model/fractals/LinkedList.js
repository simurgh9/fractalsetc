class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  setNext(listNode) {
    this.next = listNode;
  }
  setValue(value) {
    this.value = value;
  }
  getNext() {
    return this.next;
  }
  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.current = null;
  }

  isEmpty() {
    return this.length === 0;
  }
  
  add(value) {
    if (this.isEmpty()) {
      this.head = new ListNode(value, null);
      this.current = this.head;
    } else {
      let toAdd = new ListNode(value, null);
      this.current.setNext(toAdd);
      this.current = toAdd;
    }
    return ++this.length;
  }

  toArray() {
    let i = 0;
    let arr = new Array(this.length);
    for (const nodeValue of this) {
      arr[i++] = nodeValue;
    }
    return arr;
  }

  *[Symbol.iterator]() {
    if(this.isEmpty()) {
      return;
    }
    let currentNode = this.head;
    while (currentNode.getNext()) {
      let ret = currentNode.getValue();
      currentNode = currentNode.getNext();
      yield ret;
    }
    yield currentNode.getValue();
  }
}


// let ls = new LinkedList();
// ls.add(1);
// ls.add('a');
// ls.add([-1, 3.14]);
// ls.add({});
// console.log(ls.toArray());

// for(const e of ls) {
//   console.log(e);
// }

export default LinkedList;
