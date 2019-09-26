const { LinkedList } = require('../linkedList/linked-list');

function mergeLists(ll1, ll2) {
  let curr1 = ll1.head;
  let curr2 = ll2.head;
  let list = new LinkedList();

  while(curr1 || curr2) {
    if(curr1) {
      list.append(curr1.value);
      curr1 = curr1.next;
    }

    if(curr2) {
      list.append(curr2.value);
      curr2 = curr2.next;
    }
  }
  return list;
}

module.exports = {
  mergeLists
};