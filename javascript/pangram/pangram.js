class Pangram {
  constructor(string) {
    this.string = string.toLowerCase();
    this.alphabetHash = {};

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((letter) => {
      this.alphabetHash[letter] = 0;
    });
  }

  isPangram() {
    this.string.split("").forEach((letter) => {
      if (Object.keys(this.alphabetHash).includes(letter)) {
        this.alphabetHash[letter]++;
      }
    });

    let values = Object.keys(this.alphabetHash).map((v) => { return this.alphabetHash[v]; });

    return values.every((v) => { return v > 0; });
  }

}

module.exports = Pangram;
