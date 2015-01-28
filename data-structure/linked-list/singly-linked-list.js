/**
 * Singly Linked list
 *
 * @author iamlukechang@gmail.com (Luke Chang)
 */

function Node(val, next, prev) {
  this.val = val;
  this.next = next;
}

var LinkedList = (function () {

  function findPrev(list, node) {
    var curr = list.first;

    while (curr.next !== node) {
      curr = curr.next
    }

    return curr;
  }

  function LinkedList() {
    this.cnt = 0;
    this.first = null;
    this.last = null;
  }

  LinkedList.prototype.getFirst = function () {
    return this.first;
  };

  LinkedList.prototype.getLast = function () {
    return this.last;
  };

  LinkedList.prototype.addFirst = function (val) {
    var newNode = new Node(val);

    if (this.cnt > 0) {
      newNode.next = this.first;
    } else {
      this.last = newNode;
    }

    this.first = newNode;
    this.cnt++;
  };

  LinkedList.prototype.addLast = function (val) {
    var newNode = new Node(val);

    if (this.cnt > 0) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.cnt++;
  };

  LinkedList.prototype.addBefore = function (node, val) {
    var newNode = new Node(val);

    if (this.first === node) {
      this.first = newNode;
    } else {
      findPrev(this, node).next = newNode;
    }

    newNode.next = node;
    this.cnt++;
  };

  LinkedList.prototype.addAfter = function (node, val) {
    var newNode = new Node(val);

    if (this.last === node) {
      this.last = newNode;
    } else {
      newNode.next = node.next;
    }

    node.next = newNode;
    this.cnt++;
  };

  LinkedList.prototype.removeFirst = function () {
    if (this.cnt == 0) return;

    if (this.cnt == 1) {
      this.first = null;
      this.last = null;

      return;
    }

    this.first = this.first.next;
    this.cnt--;
  };

  LinkedList.prototype.removeLast = function () {
    if (this.cnt == 0) return;

    if (this.cnt == 1) {
      this.first = null;
      this.last = null;

      return;
    }

    this.last = findPrev(this, this.last);
    this.last.next = undefined;
    this.cnt--;
  };

  LinkedList.prototype.remove = function (node) {
    if (this.first === node) {
      this.removeFirst();
    } else if (this.last === node) {
      this.removeLast();
    } else {
      findPrev(this, node).next = node.next;
      this.cnt--;
    }
  };

  LinkedList.prototype.size = function () {
    return this.cnt;
  };

  LinkedList.prototype.search = function (idx) {
    var curr = this.first;

    for (var i = 0; i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  };

  return LinkedList;
})();

// export as a node module
if (typeof window === 'undefined' && typeof module !== 'undefined') module.exports = LinkedList;
