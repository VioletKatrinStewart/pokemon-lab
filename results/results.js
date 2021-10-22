import { pokemon } from '../pokemon.js';
import { getPokedex, findById } from '../storage-utils.js';

const results = getPokedex();

const main = document.getElementById('main');

for (let item of results){
    const poke = findById(pokemon, item.id);
    //console.log(item);
    //console.log(poke);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = pokemon.name;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = ` Shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Captured: ${item.picked}`;

    div.append(header, img, resultsSpan2, resultsSpan1);
    main.append(div);
}