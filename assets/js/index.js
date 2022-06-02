// Trading Card App?
let searchBar = document.querySelector('.search');
let getButton = document.querySelector('.get');
// let dotenv = require('dotenv')
// let apiKey = process.env.API_KEY



// fetch('https://project.trumedianetworks.com/api/nfl/players')
// .then(response => response.json())
// .then(data => {

// })


getButton.addEventListener('click', function(){
fetch(`https://project.trumedianetworks.com/api/token`,{
    headers: { apiKey: `${apiKey}`}
})
.then(response => response.json())
.then(data => {
    console.log(data)
})    
})