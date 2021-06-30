let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-input').value;
    console.log("submitted form", searchInput)
});
