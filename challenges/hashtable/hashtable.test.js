const Hashtable = require('./hashtable');

describe('Hash table functionality', () => {
  it('hashes a key', () => {
    const testTable = new Hashtable();
    expect(testTable.hash('antonella')).toBe(9);
  });

  it('adds a key value pair', () => {
    const testTable = new Hashtable();
    testTable.add('antonella', 'test');
    expect(testTable.get('antonella')).toEqual(['test']);
  });

  it('adds value when the key already exists', () => {
    const testTable = new Hashtable();
    testTable.add('antonella', 'test1');
    testTable.add('antonella', 'test2');
    expect(testTable.get('antonella')).toEqual(['test1', 'test2']);
  });

  it('returns null in no key does not exists', () => {
    const testTable = new Hashtable();
    expect(testTable.get('antonella')).toEqual(null);
  });

  it('checks if a hash table contains a key', () => {
    const testTable = new Hashtable();
    testTable.add('antonella', 'test');
    expect(testTable.contains('antonella')).toBe(true);
    expect(testTable.contains('fail')).toBe(false);
  });
});