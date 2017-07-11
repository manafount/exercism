class PhoneNumber {
  constructor(input) {
    this.input = input;
  }

  number() {
    let nums = this.input.match(/\d/g);
    let cleanNumber = nums.join('');
    let result = null;

    if (cleanNumber.length === 10){
      result =  cleanNumber[0] === '1' ? null : cleanNumber;
    }else if (cleanNumber.length === 11) {
      result =  cleanNumber[0] === '1' ? cleanNumber.slice(-10) : null;
    }

    if (result) {
      result = parseInt(result[3]) < 2 ? null : result;
    }

    return result;
  }
}

module.exports = PhoneNumber;
