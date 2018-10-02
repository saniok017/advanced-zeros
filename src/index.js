module.exports = function getZerosCount(number, base) {
  const factorArray = [];
  let zeroesQuantity = 0;
  // finding prime factors for base
  for (let tempBase =base, i=2; i <= tempBase; i++){
    let power = 0
    while (tempBase % i === 0){
      factorArray.push([i, power += 1]);
      tempBase /= i;
    }
  }
  // picking biggest prime factor
  const BIGGESTFACTOR =factorArray.slice(-1).pop();
  let factor =BIGGESTFACTOR[0];
  let pow = BIGGESTFACTOR[1];

  // counting zeroes 
    let tempNumber = number;
    let tempFactor = factor;
    while (tempNumber/tempFactor >= 1){
      zeroesQuantity += Math.floor(tempNumber/tempFactor);
      tempFactor *= factor;
    }
  return Math.floor(zeroesQuantity/pow);
}