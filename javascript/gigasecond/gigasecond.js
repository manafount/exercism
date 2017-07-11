class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
  }

  date() {
    let gigaDate = new Date(this.startDate.getTime() + (1000 * 1000000000));
    return gigaDate;
  }
}

module.exports = Gigasecond;
