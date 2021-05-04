const LinkedList = () => {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    var node = new Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = list.head;
    } else if (list.head.next === null) {
      list.head.next = node;
      list.tail = node;
    } else {
      while (list.head.next !== null) {
        list.tail = list.tail.next;
      }
    }
  };

  list.removeHead = () => {
    var former = list.head.value;
    list.head = list.head.next;
    return former;
  };

  list.contains = (target) => {
    var check = list.head;

    while (check.next !== null) {
      if (check.value === target) {
        return true;
      } else {
        check = check.next;
      }
    }

    if (check.next === null) {
      return check.value === target;
    }
    return false;
  };

  return list;
};

const Node = (value) => {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
