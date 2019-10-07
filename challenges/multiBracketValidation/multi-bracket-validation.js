const { Stack } = require('./stacks-and-queue');

const multiBracketValidation = (str) => {
  const stack = new Stack();
  const open = ['[', '{', '('];
  const close = [']', '}', ')'];
  const strArr = str.split('');
  let res;
  let match;
  
  strArr.forEach(symbol => {
    if(close.indexOf(symbol) > -1) {
      match = open[close.indexOf(symbol)];
      let top = stack.pop();
      if(stack.top === null || top !== match) {
        res = false;
      }
    }
    if(open.indexOf(symbol) > -1) {
      stack.push(symbol);
    }
  });

  if(stack.top === null) {
    res = true;
  } 
  else {
    res = false;
  }
  return res;
};

module.exports = {
  multiBracketValidation
};