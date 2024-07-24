const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver;

suite('Unit Tests', () => {
    test('valid puzzle string of 81 characters', function(){
        //assert.equal(, );
    });
    test('puzzle string with invalid characters (not 1-9 or .)', function(){
        //assert.equal(, );
    });
    test('puzzle string that is not 81 characters in length', function(){
        //assert.equal(, );
    });
    test('valid row placement', function(){
        //assert.equal(, );
    });
    test('invalid row placement', function(){
        //assert.equal(, );
    });
    test('valid column placement', function(){
        //assert.equal(, );
    });
    test('invalid column placement', function(){
        //assert.equal(, );
    });
    test('valid region (3x3 grid) placement', function(){
        //assert.equal(, );
    });
    test('invalid region (3x3 grid) placement', function(){
        //assert.equal(, );
    });
    test('Valid puzzle strings pass the solver', function(){
        //assert.equal(, );
    });
    test('Invalid puzzle strings fail the solver', function(){
        //assert.equal(, );
    });
    test('Solver returns the expected solution for an incomplete puzzle', function(){
        //assert.equal(, );
    });
});
