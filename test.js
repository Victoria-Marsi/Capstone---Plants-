const header = document.querySelector('header');
const section = document.querySelector('section');

var url = 'https://raw.githubusercontent.com/em-beth/JSON-FILE/main/data.json';
var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function() {
  const plants = request.response;
  console.log(plants);
  makePlants(plants);
}

var allPlants = []; //empty array
function makePlants(json){
  var allType = []; //sets current array to empty (either indoor or outdoor)
  var types = json['types']; // makes an array where evens are types and odds are arrays
  for (let i = 0; i < types.length; i++){
    if(i%2 != 0){ // if i is odd
      allType = types[i]; //i is equal to array of subtypes
      for(let j = 0; j < allType.length; j++){
        var subtype = null; //stores name of subtype
        if(j%2 == 0){ //if j is even
          subtypeName = allType['subtype'][j]; //stores name of subtype
          subtype = allType['subtype'];
        }
        else{ //if j is odd
          tempArray = subtype['members']; //array of members
          for(let k = 0; k < tempArray.length; k++){
            var tempObject = tempArray[k];
            let name = tempObject['name']; //string
            let sun = tempObject['sun']; //number
            let water = tempObject['water']; //number
            let instructions = tempObject['instructions']; //string
            let time = tempObject['time']; //string
            //if name is a certain thing it makes a certain constructor
            var currentPlant = contsructorUtil(name, sun, water, instructions, time); //makes the object and stores it
            allPlants.push(currentPlant);
          }
        }
      }
    }
  }
}

function contsructorUtil(name,sun, water, instructions, time){
 if (name === "Folliage"){
  return new Folliage(name, sun, water, instructions, time);
 }
 if (name === "Fruit"){
   return new Fruit(name, sun, water, instructions, time);
 }
 if (name === "Herb"){
   return new Herb(name, sun, water, instructions, time);
 }
 if (name === "Indoor Flower"){
   return new IndoorFlower(name, sun, water, instructions, time);
 }
 if (name === "Outdoor Flower"){
   return new OutdoorFlower(name, sun, water, instructions, time);
 }
 if (name === "Succulent"){
   return new Succulent(name, sun, water, instructions, time);
 }
 if (name === "Vegetable"){
   return new Vegetable(name, sun, water, instructions, time);
 }
 else{
   console.log("something went wrong");
 }
}
