
class DnaTranscriber {
  constructor() {
    this.complements = {
      "G": "C",
      "C": "G",
      "T": "A",
      "A": "U"
    };
  }
  toRna(dna) {
    let newRna = "";

    for (let i = 0; i < dna.length; i++) {
      if (Object.keys(this.complements).includes(dna[i])) {
        newRna += this.complements[dna[i]];
      }else{
        throw "Invalid input";
      }
    }

    return newRna;
  }
}

module.exports = DnaTranscriber;
