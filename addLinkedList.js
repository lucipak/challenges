/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const helper = (list) => {
    const container = [];
    let current = list;
    container.push(current.val);
    while (current.next !== null) {
      current = current.next;
      container.push(current.val);
    }
    return Number(container.reverse().join(''));
  };
  let result = (helper(l1) + helper(l2)).toString().split('');
  result = result.reduce((next, val) => {
    val = Number(val);
    // console.log(val)
    const node = new ListNode(val);
    // console.log(node.val)
    node.next = next;
    return node;
  }, null);
  return result;
};
