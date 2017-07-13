class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.frequency = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //initialize frequency hashmap to 0
    for (let i = 0; i < alphabet.length; i++) {
      this.frequency[alphabet[i]] = 0;
    }

    for (let i = 0; i < this.word.length; i++) {
      this.frequency[this.word[i]] += 1;
    }
  }

  matches(...args) {
    let result = [];

    // handle array input (will not handle multiple nested arrays)
    if (Array.isArray(args[0])) {
      args = args[0];
    }

    for (let i = 0; i < args.length; i++) {
      if (this.match(args[i].toLowerCase())) {
        if (this.word !== args[i].toLowerCase()) {
          result.push(args[i]);
        }
      }
    }

    return result;
  }

  match(string) {
    let clone = Object.assign({}, this.frequency);

    for (let i = 0; i < string.length; i++) {
      clone[string[i]] -= 1;
    }

    for (let key in clone) {
      if (clone[key] !== 0) return false;
    }

    return true;
  }
}

module.exports = Anagram;
