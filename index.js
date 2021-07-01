let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input').value;
    console.log(event);
    if(searchInput == 'name'){
        var className;
      //  className = event.target.#searchform;
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
    }
    if (event.target.className === 'herb'){

    }
    if(event.target.className === 'folliage'){

    }
    if(event.target.className === 'indoorFlower'){

    }
    if(event.target.className === 'succulent'){

    }
    if(event.target.className === 'vegetable'){

    }
});
