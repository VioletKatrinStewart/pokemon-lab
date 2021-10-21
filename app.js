// import functions and grab DOM elements
import { pokemon } from './pokemon.js';

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');
const button = document.getElementById('select');

const generatePokemon = () => {

    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);

    while (
        randNum1 === randNum2 ||
  randNum1 === randNum3 ||
  randNum2 === randNum3

    ) {
        randNum1 = Math.floor(Math.random () * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);

    }
    //console.log(randNum1, randNum2, randNum3);
    let poke1 = pokemon[randNum1];
    poke1Img.src = poke1.url_image;

    let poke2 = pokemon[randNum2];
    poke2Img.src = poke2.url_image;

    let poke3 = pokemon[randNum3];
    poke3Img.src = poke3.url_image;
};

generatePokemon();

button.addEventListener('click', ()=>{
    generatePokemon();
    const userChoice = document.querySelector('input[type=radio]:checked');
    console.log(userChoice, pokemon);
});

