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
}

var allPlants = []; //empty array
function makePlants(json){
  var allType = []; //sets current array to empty
  var type = json['types']; // makes an array where evens are types and odds are arrays
  for (let i = 0; i < types.length; i++){
    if(i%2 != 0){ // if i is odd
      allType = type[i]; //i is equal to array of subtypes
      for(let j = 0; j < allType.length; j++){

      }
    }
  }
}
