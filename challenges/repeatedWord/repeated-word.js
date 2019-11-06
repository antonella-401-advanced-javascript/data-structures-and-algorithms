const repeat = (str) => {
  const rmPunct = str.replace(/[^\w\s]/, '');
  const arr = rmPunct.toLowerCase().split(' ');
  let wordCount = {};

  for(let i = 0; i < arr.length; i++) {
    if(!wordCount[i]) {
      wordCount[i] = 1;
    }
    else {
      return arr[i];
    }
  }
};

module.exports = repeat;