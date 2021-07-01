class Succulent extends Indoor{

  constructor(name, sun, water, instructions, time){
    super('Succulent');
    this.subtype = 'Succulent';
    this.name = name;
    this.sun = sun;
    this.water = water;
    this.instructions = instructions;
    this.time = time;
    this.desc;
  }
}
