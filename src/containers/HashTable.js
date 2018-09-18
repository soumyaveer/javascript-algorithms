class HashTable{
  constructor(){
    this.table = [];
  }

  hashCode(key){
    let hash = 0;

    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash;
  }
}

module.exports = HashTable;