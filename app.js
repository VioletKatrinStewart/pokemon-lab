// import functions and grab DOM elements
import { pokemon } from './pokemon.js';
import { pickPokemon, shownPokemon } from './storage-utils.js';

const poke1Img = document.getElementById('poke-1-img');
const poke2Img = document.getElementById('poke-2-img');
const poke3Img = document.getElementById('poke-3-img');
const poke1Radio = document.getElementById('poke-1-radio');
const poke2Radio = document.getElementById('poke-2-radio');
const poke3Radio = document.getElementById('poke-3-radio');
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
    shownPokemon(poke1.id);
    poke1Img.src = poke1.url_image;
    poke1Radio.value = poke1.id;
    //shownPokemon(poke1.id);
    let poke2 = pokemon[randNum2];
    shownPokemon(poke2.id);
    poke2Img.src = poke2.url_image;
    poke2Radio.value = poke2.id;
    //shownPokemon(poke2.id);
    let poke3 = pokemon[randNum3];
    shownPokemon(poke3.id);
    poke3Img.src = poke3.url_image;
    poke3Radio.value = poke2.id;
    //shownPokemon(poke3.id);
};
let totalPlays = 0;
generatePokemon();

button.addEventListener('click', ()=>{
    const chosenRadio = document.querySelector('input[type=radio]:checked');
    generatePokemon();
    if (chosenRadio){
        const chosenID = Number(chosenRadio.value);
        totalPlays++;
        pickPokemon(chosenID);
        if (totalPlays >= 10){
            window.location = './results';
        } else {
            generatePokemon();
        }

    }
});

