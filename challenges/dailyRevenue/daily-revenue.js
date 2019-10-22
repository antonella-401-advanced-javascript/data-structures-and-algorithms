const rev = transaction => {
  let revenue = {};
  transaction.forEach((stamp, i) => {
    let rev = transaction[i].price;
    let date = new Date(stamp.timestamp);
    let keyDate = date.toString().substring(0, 15);
  
    if(!revenue[keyDate]) {
      revenue[keyDate] = rev;
    }
    else {
      revenue[keyDate] += rev;
    }
  });
  return revenue;
};

module.exports = rev;