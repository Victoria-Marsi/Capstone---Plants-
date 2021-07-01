class Herb extends Outdoor{

  constructor(name, sun, water, instructions, time){
    super();
    this.subtype = 'Herb';
    this.name = name;
    this.sun = sun;
    this.water = water;
    this.instructions = instructions;
    this.time = time;
    this.desc;
  }
}
