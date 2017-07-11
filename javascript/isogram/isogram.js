class Isogram {
  constructor(string) {
    this.string = string;
  }

  isIsogram() {
    let letterHash = {};
    let result = true;

    this.string.toLowerCase().split("").forEach((letter) => {
      if (letterHash[letter]) {
        // can't return out of a forEach statement, so we set this flag to false
        result = false;
      }else if (/[A-zÀ-ÿ]/.test(letter)){
        letterHash[letter] = true;
      }
    });
    return result;
  }
}

module.exports = Isogram;
