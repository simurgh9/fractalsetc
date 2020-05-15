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
  
  tail() {
    if (this.isEmpty())
      return null;
    return this.current.getValue();
  }

  slice(begin, end = null) {
    if (!end)
      end = this.length;
    let ret = new LinkedList();
    let i = 0;
    for (const nodeValue of this) {
      if (begin <= i && i < end)
        ret.add(nodeValue);
      i++;
    }
    return ret;
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
// ls.add('ant');
// ls.add('bison');
// ls.add('camel');
// ls.add('duck');
// ls.add('elephant');

// for (const e of ls)
//   console.log(e);

// console.log('To Array: ' + ls.toArray());
// console.log('Tail: ' + ls.tail());
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(ls.slice(2).toArray());
// // expected output: Array ["camel", "duck"]
// console.log(ls.slice(2, 4).toArray());
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(ls.slice(1, 5).toArray());

export default LinkedList;
