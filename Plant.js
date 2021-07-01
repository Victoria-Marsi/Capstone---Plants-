/**
 * Desc:
 * Stores information about caring for each plant
 */

class Plant{

  constructor(subtype, type, name, sun, water, instructions, time, imgs){
    this.type = type; //string
    this.name = name; //string
    this.sun = sun; //number
    this.water = water; //number
    this.instructions = instructions; //long string
    this.time = time; //string
    this.desc;
    this.show = false;
    this.subtype = subtype;
    this.imgs = imgs; // picture or array of pictures
  }

  //getters
  getType(){
    return this.type;
  }

  getName(){
    return this.name;
  }

  getSun(){
    return this.sun;
  }

  getWater(){
    return this.water;
  }

  getInstructions(){
    return this.instructions;
  }

  getTime(){
    return this.time;
  }

  getTemp(){
    return this.temp;
  }

  getDesc(){
    return this.desc;
  }

  //setters (might be useful for long strings)

  setInstructions(text){
    text = instructions;
  }

  setDesc(text){
    text = desc;
  }

  setShow(boolean){
    show = boolean;
  }
  setImg(img){
    imgs = img;
  }
}
