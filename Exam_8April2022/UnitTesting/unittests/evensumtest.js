const {sumofevens} = require('../libs/sumofevens');

const testSum = (req, res) => {
  let n = 3;
  let result = 12;
  if (sumofevens(n) === result) {
    res.send('EvenSum test pass');
  } else {
    res.send('EvenSum test fail');
  }
};

module.exports = {testSum};
