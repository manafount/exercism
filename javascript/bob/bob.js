class Bob {
  constructor() {
    this.matches = {
      'question': /.*\?$/,
      'yell': /^[A-Z\s\?]+$|^[^a-z]*\!$/,
      'nothing': /^\s*$/,
    }
    this.responses = {
      'question': 'Sure.',
      'yell': 'Whoa, chill out!',
      'nothing': 'Fine. Be that way!',
      'else': 'Whatever.'
    }
  }

  hey(string) {
    let response = this.responses.else;

    Object.keys(this.matches).forEach((key) => {
      console.log(key);
      if (this.matches[key].test(string)) {
        response = this.responses[key];
      }
    });
    return response;
  }
}

module.exports = Bob;
