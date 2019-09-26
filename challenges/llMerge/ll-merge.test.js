const { mergeLists } = require('./ll-merge.js');
const { LinkedList } = require('../linkedList/linked-list');

describe('merge linked lists', () => {

  it('merges two linked lists alternating the two', () =>{
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();

    ll1.append(1);
    ll1.append(2);
    ll1.append(3);
    ll1.append(4);

    ll2.append(5);
    ll2.append(6);
    ll2.append(7);
    ll2.append(8);

    const list = mergeLists(ll1, ll2);

    expect(list.toString()).toBe('1, 5, 2, 6, 3, 7, 4, 8');
  });
});