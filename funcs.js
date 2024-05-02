function isFive(num) {
  // Your code here 
  if (num !== 5) return false;
  return true;
}

function isOdd(number) {
  // Your code here
  if (number % 2 !== 0 && typeof number === 'number') return true;
  else if (number % 2 === 0) return false; 
  else if (typeof number !== 'number') {
    throw Error ('Not a number!')
  }
}

function myRange(min, max, step = 1) {
  // Your code here 
  let res = [];
  if (step === undefined) {
    if (min <= max) {
      for (let i = min; i <=max; i++) {
        res.push(i);
      }
      return res;
    }
    return res;
  }

  if (step !== undefined) {
    if (min <= max - step) {
      for (let i = min; i <=max; i+=step) {
        res.push(i);
      }
      return res;
    }
    return res;
  }
}


console.log(myRange(6,15,2))


module.exports = { isFive, isOdd, myRange };
