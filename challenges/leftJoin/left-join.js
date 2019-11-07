const leftJoin = (tableOne, tableTwo) => {
  let res = [];
  for(let i = 0; i < tableOne.bucket.length; i++) {
    if(tableOne.bucket[i] !== undefined) {
      res.push(tableOne.bucket[i]);
    }
  }
  for(let i = 0; i < tableTwo.bucket.length; i++) {
    if(tableTwo.bucket[i] !== undefined) {
      res.forEach(kv => {
        if(tableTwo.bucket[i][0] === kv[0]) {
          kv.push(tableTwo.bucket[i][1]);
        }
      });
    }
  }
  res.forEach(result => {
    if(result.length === 2) {
      result.push(null);
    }
  });
  console.log(res);
  return res;
};

module.exports = leftJoin;