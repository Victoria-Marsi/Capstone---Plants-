let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input').value;
    console.log(event);
    if(searchInput == 'name'){
        var className;
        className = event.target.#searchform;
        console.log(className);
        const match = allPlants.find(element => element.name === className);
        console.log(match);
      }
    // alert("You are looking for " + searchInput)
});

var dropdown = document.body.querySelector('.dropdown-content');
dropdown.addEventListener('click', function(event){
    console.log(event);
    if(event.target.className === 'fruit'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Fruit'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var fruits = [];
        fruits = allPlants.filter(element => element.show === true );
        makeDisplay(fruits);
    }
    if (event.target.className === 'herb'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Herb'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var herbs = [];
        herbs = allPlants.filter(element => element.show === true );
        makeDisplay(herbs);
    }
    if(event.target.className === 'folliage'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Folliage'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var Folliage = [];
        Folliage = allPlants.filter(element => element.show === true );
        makeDisplay(Folliage);

    }
    if(event.target.className === 'indoorFlower'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Indoor Flower'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var indoor = [];
        indoor = allPlants.filter(element => element.show === true );
        makeDisplay(indoor);

    }
    if(event.target.className === 'succulent'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Succulent'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var succulents = [];
        succulents = allPlants.filter(element => element.show === true );
        makeDisplay(succulents);
    }
    if(event.target.className === 'vegetable'){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Vegetable'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var vegetable = [];
        vegetable = allPlants.filter(element => element.show === true );
        makeDisplay(vegetable);

    }
    if (event.target.className === "outdoorFlower"){
        console.log(event.target.className);
        for(let i = 0; i < allPlants.length; i++){
            allPlants[i].show = false;
            console.log(allPlants[i].show);
            if(allPlants[i].subtype === 'Outdoor Flower'){
                console.log("working");
                allPlants[i].show = true;
            }
        }
        var outdoor = [];
        outdoor = allPlants.filter(element => element.show === true );
        makeDisplay(outdoor);

    }
});

function makeDisplay(array){
    var template = "";
    var container = document.querySelector('.plantContainer');
    for (let i = 0; i < array.length; i++){
        console.log(array);
      if(array[i].show === true){
        console.log(array[i].show);
      template+=`<div class="${array[i].name}">
      <img class="${array[i].name}" src="${array[i].imgs}">
      <p>${array[i].name}</p>
      <p class = hidden> sun level: ${array[i].sun} water level: ${array[i].water } care instructions: ${array[i].instructions } planting season: ${array[i].time} </p>
    </div>`
    }
  }
    container.innerHTML = template;
    //console.log(template);
  }
