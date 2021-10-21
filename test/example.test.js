// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { getPokedex } from "../storage-utils.js";

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

// test('getPokedex should return the list of captured pokemon if it exists', (expect)=>{
//     const fakePoke = [
//         { pokemon:}
//     ]
// }
// }