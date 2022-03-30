import { personajes } from "../data/data.js";

console.log(personajes)

let button = document.getElementById('generate');
let imagen = document.getElementById("img-personaje");
let name = document.getElementById("personaje");
let escudo = document.getElementById("escudo");
let escuela = document.getElementById("casa");
let arr = [1, 2 , 3, 4 , 5, 6, 7 , 8 , 9 , 10 , 11,12, 13 , 14 , 15 ,16 ,17 , 18, 19 ,20 ,21 ,22 ,23 ,24 ,25]
let num = Math.floor(Math.random() * (25 - 0) + 0);

window.addEventListener("DOMContentLoaded", ()=>{
    // for(let i = 0;i < personajes.length; i++ ){
    //     imagen.setAttribute("src", personajes[i].image)
    //     name.textContent = personajes[i].nombre
    // }
    imagen.setAttribute("src", personajes[num].image)
    name.textContent = personajes[num].nombre
    console.log(arr[num])
    escudo.setAttribute("src", personajes[num].escudo)
    escuela.textContent = personajes[num].casa

})

button.addEventListener("click", ()=>{
    window.location.reload()
})
