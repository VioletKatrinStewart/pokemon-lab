export function findById(items, id) {
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(pokeString);
    return results;
}

export function shownPokemon(id){
    let results = getPokedex();
    let item = findById (results, id);

    if (item){
        item.shown++;
    } else {
        const newItem = { id: id, shown: 1, picked: 0 };
        results.push(newItem);
    }
    localStorage.setItem('RESULTS', results);
}

export function pickPokemon(id){
    let results = getPokedex();
    let item = findById(results, id);

    item.picked++;

    localStorage.setItem(JSON.stringify(results));
}





