class BeerSong {
  verse(num) {
    let takeOrRefill = (num === 0 ? 'Go to the store and buy some more' :
      `Take ${num === 1 ? 'it' : 'one'} down and pass it around`);
    console.log(this.partialVerse(num).toLowerCase());
    return `${this.partialVerse(num)} on the wall, ${this.partialVerse(num).toLowerCase()}.\n`
      + `${takeOrRefill}, ${this.partialVerse(num-1).toLowerCase()} on the wall.\n`;
  }

  partialVerse(num) {
    num = num < 0 ? 99 : num;
    let numStr = (num === 0 ? 'No more' : `${num}`);
    let botOrBots = (num === 1 ? 'bottle' : 'bottles');
    return `${numStr} ${botOrBots} of beer`;
  }

  sing(start, end) {
    end = end || 0;
    let result = '';
    for(let i = start; i >= end; i--){
      result = result.concat(this.verse(i));
      if (i > end) result = result.concat('\n');
    }
    return result;
  }
}

module.exports = BeerSong;
