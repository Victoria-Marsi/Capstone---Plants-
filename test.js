function onLoad(){
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
  var allType = json['types']; // makes an array where evens are types and odds are arrays
  console.log(allType.length);
  for (let i = 0; i < allType.length; i++){
    var subtypeName = null; //stores name of subtype
   // console.log("here");
    if(i%2 != 0){ // if i is odd
     // allType = types[i]; //i is equal to array of subtypes
      //console.log(allType.length);
      //console.log("odd");
      var subtypes = []; //array to store current location
      subtypes = allType[i]['subtype'];
      console.log(subtypes.length);
      for(let j = 0; j < subtypes.length; j++){
        console.log("beginning of loop 2");
        if(j%2 == 0){ //if j is even
          subtypeName = subtypes[j];
         // console.log(subtypeName);
        }
        else{ //if j is odd
          var tempArray = [];
          tempArray = subtypes[j];
          console.log(tempArray);
          var memberArray = [];
          memberArray = tempArray['members'];
         // console.log(memberArray);
         // tempArray = subtype['members']; //fill array
          for(let k = 0; k < memberArray.length; k++){
            var tempObject = memberArray[k];
            let name = tempObject['name']; //string
            let sun = tempObject['sun']; //number
            let water = tempObject['water']; //number
            let instructions = tempObject['instructions']; //string
            let time = tempObject['time']; //string
            //if name is a certain thing it makes a certain constructor
            var currentPlant = contsructorUtil(subtypeName, name, sun, water, instructions, time); //makes the object and stores it
            allPlants.push(currentPlant);
            console.log(subtypeName);
            console.log(currentPlant);
          }
        }
      }
    }
  }
}

function contsructorUtil(subtype, name,sun, water, instructions, time){
 if (subtype === "Folliage"){
  return new Folliage(name, sun, water, instructions, time);
 }
 if (subtype === "Fruit"){
   return new Fruit(name, sun, water, instructions, time);
 }
 if (subtype === "Herb"){
   console.log("hello?");
   return new Herb(name, sun, water, instructions, time);

 }
 if (subtype === "Indoor Flower"){
   return new IndoorFlower(name, sun, water, instructions, time);
 }
 if (subtype === "Outdoor Flower"){
   return new OutdoorFlower(name, sun, water, instructions, time);
 }
 if (subtype === "Succulent"){
   return new Succulent(name, sun, water, instructions, time);
 }
 if (subtype === "Vegetable"){
   return new Vegetable(name, sun, water, instructions, time);
 }
 else{
   console.log("something went wrong");
 }
}
}
