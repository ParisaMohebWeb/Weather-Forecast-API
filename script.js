const form = document.querySelector('.form')
const input = document.querySelector('.user-search')
let h1 = document.querySelector('.h1h')


// on load
getData('gilan')
// on load

function getData(cityName) {
    fetch('https://api.weatherapi.com/v1/current.json?key=e8a88f54ac554652abe135348242511&q=' + cityName)
    .then((res) =>{
        if(res.ok){
            return res.json()
        }else{
            Promise.reject()
        }
    })
    .then((res=>{
        console.log(res)
        h1.innerText = res.location.name +', ' + res.location.country
    }))

    .catch()
    
}