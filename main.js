// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, arr){
  let obj = {
    specimen: number,
    dna: arr,
    mutate(){
      for(let i = 0; i < this.dna.length; i++){
        let newBase;
        do {
          newBase = returnRandBase();
        } while (this.dna[i] === newBase);
        this.dna[i] = newBase;
      }
      return this.dna;
    },
    compareDNA(obj){
      let count = 0;
      for(let i = 0; i < obj.length; i++){ 
          if(obj[i] === this.dna[i]){
            count++;
          }
      }
      count = (count/obj.length)*100;
      return `specimen #1 and specimen #2 have ${count}% DNA in common`;
    },
    willLikelySurvive(){
      let count = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          count++;
        }
      }
      let number = this.dna.length * .6;
      if(number <= count){
        return true;
      }
      else{
        return false;
      }
    }
  }
  return obj;
}



const newOrganism1 = pAequorFactory(3, ['A', 'T', 'C', 'G']);
console.log(newOrganism1.mutate()); 
const newOrganism2 = pAequorFactory(3, ['A', 'T', 'C', 'G']);
console.log(newOrganism2.compareDNA(['T', 'T', 'A', 'G'])); 
const newOrganism3 = pAequorFactory(3, ['A', 'C', 'C', 'G']);
console.log(newOrganism3.willLikelySurvive()); 
let testOrganism = pAequorFactory(Math.random()*100, mockUpStrand());

let count = 0;
let arrOfOrgs = [];
while(count < 30){
  if(testOrganism.willLikelySurvive){
    arrOfOrgs.push(testOrganism.dna)
    count++;
  }
  testOrganism = pAequorFactory(Math.random()*100, mockUpStrand());
}
console.log(arrOfOrgs);