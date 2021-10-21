export function findById(pokemon, items) {
    for (let item of items){
        if (item.pokemon === pokemon){
            return item;
        }
    }
}
