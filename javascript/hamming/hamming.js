class Hamming {
  compute(first, second) {
    let distance = 0;

    if (first.length !== second.length) {
      throw 'DNA strands must be of equal length.';
    }

    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]){
        distance++;
      }
    }

    return distance;
  }
}


module.exports = Hamming;
