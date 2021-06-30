class Annual extends Outdoor{

  constructor(name, sun, water, instructions, time, temp, desc){
    super();
    this.subtype = 'Annual';
    this.name = name;
    this.sun = sun;
    this.water = water;
    this.instructions = instructions;
    this.time = time;
    this.temp = temp;
    this.desc = desc;
  }
}
