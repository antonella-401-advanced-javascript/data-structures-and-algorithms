const repeat = (str) => {
  const rmPunct = str.replace(/[^\w\s]/, '');
  const arr = rmPunct.toLowerCase().split(' ');
  let wordCount = {};
  let answer;

  for(let i = 0; i < arr.length; i++) {
    if(!wordCount[arr[i]]) {
      wordCount[arr[i]] = 1;
    }
    else {
      answer = arr[i];
    }
    console.log(answer);
  }
};

module.exports = repeat;