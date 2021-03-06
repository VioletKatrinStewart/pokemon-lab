// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { getPokedex } from "../storage-utils.js";

import { getPokedex, shownPokemon, pickPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test ('getPokedex returns the key RESULTS from localStorage', (expect) => {

    const results = [ 
        { id: 'bulbasaur', shown: 2, picked: 2 },
        { id: 'pikachu', shown: 2, picked: 1 },
        { id: 'caterpie', shown: 2, picked: 1 },
    ];

    localStorage.setItem('RESULTS', JSON.stringify(results));

    const actual = getPokedex();

    expect.deepEqual(actual, results);
});

test ('getPokedex returns an empty array if there is no RESULTS key in localStorage', (expect)=>{

    localStorage.removeItem('RESULTS');
    const actual = getPokedex();

    expect.deepEqual(actual, []);
});

test('shownPokemon increments the shown key when the item exists in results', 
    (expect)=>{
        const results = [ 
            { id: 'bulbasaur', shown: 2, picked: 2 },
        ];

        localStorage.setItem('RESULTS', JSON.stringify(results));
        const expected = [ 
            { id: 'bulbasaur', shown: 3, picked: 2 },
        ];

        shownPokemon('bulbasaur'); 
        const actual = getPokedex();

        expect.deepEqual(actual, expected);
    });

test('shownPokemon adds a new item if its not in results', (expect)=>{
 
    localStorage.removeItem('RESULTS');
    const expected = [
        { id: 'bulbasaur', shown: 1, picked: 0 },
    ];
    shownPokemon('bulbasaur');
    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});

test('pickPokemon increments the picked key when the item exists in results', (expect)=>{
    const results = [ 
        { id: 'bulbasaur', shown: 2, picked: 2 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { id: 'bulbasaur', shown: 2, picked: 3 },
    ];


    pickPokemon('bulbasaur'); 
    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});
