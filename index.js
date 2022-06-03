// Trading Card App?
let searchBar = document.querySelector('.search');
let testButton = document.querySelector('.test');
// require('dotenv').config()
// let apiKey = process.env.API_KEY

require('dotenv').config()

console.log(process.env)





// fetch('https://project.trumedianetworks.com/api/nfl/players')
// .then(response => response.json())
// .then(data => {

// })


testButton.addEventListener('click', function(){
fetch(`https://project.trumedianetworks.com/api/token`,{
    headers: { apiKey: `${apiKey}`}
})
.then(response => response.json())
.then(data => {
    console.log(data)
})    
})
