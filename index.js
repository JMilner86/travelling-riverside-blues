
// let searchBar = document.querySelector('.search');
// let testButton = document.querySelector('.test');
// let test2 = document.querySelector('.test2');


// testButton.addEventListener('click', function(){
// fetch(`https://project.trumedianetworks.com/api/token`,{
//     headers: { apiKey: `${apiKey}`}
// })
// .then(response => response.json())
// .then(data => {
//     let token = data.token
//     fetch(`https://project.trumedianetworks.com/api/nfl/players`, {
//         headers: {tempToken: `${token}`}
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
// })
// })

// test2.addEventListener('click', function(){
//     fetch(`https://project.trumedianetworks.com/api/token`,{
//         headers: { apiKey: `${apiKey}`}
//     })
//     .then(response => response.json())
//     .then(data => {
//         let token = data.token
//         fetch(`https://project.trumedianetworks.com/api/nfl/player/2560800`, {
//             headers: {tempToken: `${token}`}
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//     })
// })