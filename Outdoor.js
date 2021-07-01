class Outdoor extends Plant{

  constructor(subtype){
    super();
    this.type = 'Outdoor';
    this.subtype = subtype;
  }

  //getter
  getSubtype(){
    return this.subtype;
  }
}
