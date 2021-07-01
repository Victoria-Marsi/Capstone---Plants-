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
// if(searchInput == 'name'){
//     var className;
//     className = event.target.#searchform;
//     console.log(className);
//     const match = allPlants.find(element => element.name === className);
//     console.log(match);
//   }



    

