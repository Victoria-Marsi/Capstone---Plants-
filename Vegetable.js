class Vegetable extends Outdoor{

  constructor(name, sun, water, instructions, time){
    super('Vegetable');
    this.subtype = 'Vegetable';
    this.name = name;
    this.sun = sun;
    this.water = water;
    this.instructions = instructions;
    this.time = time;
    this.desc;
  }
}
