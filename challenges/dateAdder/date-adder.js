const add = (date, diff) => {
  const diffNum = diff.slice(0, diff.length - 1);
  let added;
  if(diff.match(/s$/)) {
    added = 1000;
  }
  else if(diff.match(/m$/)) {
    added = 1000 * 60;
  }
  else if(diff.match(/h$/)) {
    added = 1000 * 60 * 60;
  }
  else if(diff.match(/d$/)) {
    added = 1000 * 60 * 60 * 24;
  }
  else if(diff.match(/w$/)) {
    added = 1000 * 60 * 60 * 24 * 7;
  }
  else if(diff.match(/M$/)) {
    added = 1000 * 60 * 60 * 24 * 7 * 30.44;
  }
  else if(diff.match(/y$/)) {
    added = 1000 * 60 * 60 * 24 * 7 * 30.44 * 12;
  }
  return (date + Number(diffNum) * added);
};

module.exports = add;