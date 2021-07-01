function onLoad(){
const header = document.querySelector('header');
const section = document.querySelector('section');

var url = 'https://raw.githubusercontent.com/em-beth/JSON-FILE/main/data.json';
var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

var allPlants = []; //empty array

request.onload = function() {
  const plants = request.response;
  console.log(plants);
  makePlants(plants);
  selectionSort(allPlants);
  makeDisplay(allPlants);
}

function makePlants(json){
  var allType = []; //sets current array to empty (either indoor or outdoor)
  var allType = json['types']; // makes an array where evens are types and odds are arrays
  console.log(allType.length);
  for (let i = 0; i < allType.length; i++){
    var subtypeName = null; //stores name of subtype
    if(i%2 != 0){ // if i is odd
      var subtypes = []; //array to store current location
      subtypes = allType[i]['subtype'];
      console.log(subtypes.length);
      for(let j = 0; j < subtypes.length; j++){
        console.log("beginning of loop 2");
        if(j%2 == 0){ //if j is even
          subtypeName = subtypes[j];
        }
        else{ //if j is odd
          var tempArray = [];
          tempArray = subtypes[j];
          console.log(tempArray);
          var memberArray = [];
          memberArray = tempArray['members'];
          for(let k = 0; k < memberArray.length; k++){
            var tempObject = memberArray[k];
            let name = tempObject['name']; //string
            let sun = tempObject['sun']; //number
            let water = tempObject['water']; //number
            let instructions = tempObject['instructions']; //string
            let time = tempObject['time']; //string
            let imgs = tempObject['imgs'];
            console.log(imgs);
            //if name is a certain thing it makes a certain constructor
            var currentPlant = contsructorUtil(subtypeName, name, sun, water, instructions, time, imgs); //makes the object and stores it
            currentPlant.imgs = imgs;
            allPlants.push(currentPlant);
            //console.log(subtypeName);
           // console.log(currentPlant);
          }
        }
      }
    }
  }
  console.log(allPlants);
}

function contsructorUtil(subtype, name,sun, water, instructions, time, imgs){
 if (subtype === "Folliage"){
  return new Folliage(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Fruit"){
   return new Fruit(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Herb"){
   return new Herb(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Indoor Flower"){
   return new IndoorFlower(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Outdoor Flower"){
   return new OutdoorFlower(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Succulent"){
   return new Succulent(name, sun, water, instructions, time, imgs);
 }
 if (subtype === "Vegetable"){
   return new Vegetable(name, sun, water, instructions, time, imgs);
 }
 else{
   console.log("something went wrong");
 }
}

function swap(firstIdx, secondIdx, array){
  var tmp = array[firstIdx];
  array[firstIdx] = array[secondIdx];
  array[secondIdx] = tmp;
}

function selectionSort(array){
  for (let i = 0; i < array.length; i++){
    let minIdx = i;
    for (let j = i+1; j < array.length; j++){
      if((array[j].name).localeCompare(array[minIdx].name) < 0){
        minIdx = j;
      }
    }
    swap(minIdx, i, array);
  }
  console.log(array);
}

function makeDisplay(array){
  var template = "";
  var container = document.querySelector('.plantContainer');
  for (let i = 0; i < array.length; i++){
    if(array[i]){
    template+=`<div class="${array[i].name}">
    <img class="${array[i].name}" src="${array[i].imgs}">
    <p>${array[i].name}</p>
    <p class = hidden> sun level: ${array[i].sun} water level: ${array[i].water } care instructions: ${array[i].instructions } planting season: ${array[i].time} </p>
  </div>`
  }
}
  container.innerHTML = template;
  console.log(template);
}

var container = document.querySelector('.plantContainer');
container.addEventListener('click', function(event){
 // console.log(event);
  if(event.target.localName === 'img'){
    var className;
    className = event.target.className;
    console.log(className);
    const match = allPlants.find(element => element.name === className);
    console.log(match);
  }
});

function showInfo(object){

}
}
