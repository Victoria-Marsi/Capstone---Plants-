class Outdoor extends Plant{

  constructor(subtype){
    super();
    this.type = 'Outdoor';
    this.subtype = subtype;
    this.isEdible = false; //false is default
  }

  //getter
  getSubtype(){
    return this.subtype;
  }

  getEdible(){
    return this.isEdible;
  }

  //setter
  setEdible(boolean){
    this.isEdible = boolean; //for overwriting to true
  }
}
