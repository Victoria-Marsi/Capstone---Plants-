class Indoor extends Plant{

  constructor(subtype){
    super();
    this.type = 'Indoor';
    this.subtype = subtype;
  }

  //getter
  getSubtype(){
    return this.subtype;
  }
}
