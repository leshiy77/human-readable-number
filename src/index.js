module.exports = function toReadable (number) {
  const singleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const fromTenToNineteen = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decimalNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundredNumber = 'hundred';
  let readable = [];
  if (number < 10) {
    readable[0] = singleNumber[number];
  } else if (number >= 10 && number < 20) {
    readable[0] = fromTenToNineteen[number%10];
  } else {
    let numberArray = String(number).split('');
    if (numberArray.length < 3) {
      readable[0] = decimalNumber[numberArray[0] - 2];
      if (number % 10 != 0) {
        readable[1] = singleNumber[numberArray[1]];
      }
    } else {
      readable[1] = hundredNumber;
      if (number % 100 === 0) {
        readable[0] = singleNumber[numberArray[0]];
      } else if (number % 10 === 0 && number % 100 !== 10) {
        readable[0] = singleNumber[numberArray[0]];
        readable[2] = decimalNumber[numberArray[1] - 2];
      } else if (number % 100 > 0 && number % 100 < 10) {
        readable[0] = singleNumber[numberArray[0]];
        readable[2] = singleNumber[numberArray[2]];
      } else if (number % 100 > 0 && number % 100 > 9 && number % 100 < 20) {
        readable[0] = singleNumber[numberArray[0]];
        readable[2] = fromTenToNineteen[number % 100 % 10];
      } else {
        readable[0] = singleNumber[numberArray[0]];
        readable[2] = decimalNumber[numberArray[1] - 2];
        readable[3] = singleNumber[numberArray[2]];
      }
    }
  }
  return readable.join(' ');
}
