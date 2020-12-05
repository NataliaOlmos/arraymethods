//CONSTANTES
const URL = 'https://amiiboapi.com/api/amiibo/'

//SELECTORES
let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')


//FUNCIONES
function getData(){
    fetch(URL)
    .then(result => {
      console.log(result)  
      return result.json()
    })
    .then(data=>{
        console.log(data.amiibo)
        for(let char of data.amiibo){
            displayData(char.name, char.image, char.gameSeries, char.type)
        }
        })
    
        
function displayData(name, image, gameSeries, type){

    let div = document.createElement('div')
    div.innerHTML = `

    <div class="card-deck">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <img src="${image}"/>
      <p class="card-text">${gameSeries}</p>
      <p class="card-text"><small class="text-muted">${type}</small></p>
    </div>
  </div>


       `
    container.appendChild(div)

}

formulario.addEventListener('keyup', (e) => {
const searchString = e.target.value.toLowerCase();
console.log(searchString)
    const filteredData= list.filter((amiibo) => {
      return (
        list.name.toLowerCase().includes(searchString)
      )
    });
  
  
    drawPokemons(filteredData)
  
  })

}

//LISTENERS
getData()