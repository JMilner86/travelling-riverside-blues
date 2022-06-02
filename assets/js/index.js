// Trading Card App?
let searchBar = document.querySelector('.search');
let getButton = document.querySelector('.get');


fetch('https://project.trumedianetworks.com/api/nfl/players')
.then(response => response.json())
.then(data => {

})