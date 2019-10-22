const rev = transaction => {
  let revenue = {};
  transaction.forEach((stamp, i) => {
    let rev = transaction[i].price;
    let date = new Date(stamp.timestamp);
    let utc = date.toUTCString();
    let keyDate = utc.substring(0, 16);
  
    if(!revenue[keyDate]) {
      revenue[keyDate] = rev;
    }
    else {
      revenue[keyDate] += rev;
    }
  });
  console.log(revenue);
  return revenue;
};

module.exports = rev;