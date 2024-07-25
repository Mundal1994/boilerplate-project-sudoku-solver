const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const Puzzle = require('../controllers/puzzle-strings.js');
let solver = new Solver;

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
        assert.isTrue(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[0][0], 1, 2, 3));
        assert.isTrue(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[2][0], 1, 1, 2));
        assert.isTrue(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 9, 8));
        assert.isTrue(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[1][0], 8, 9, 2));
    });
    test('invalid row placement', function(){
        assert.isFalse(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[0][0], 1, 2, 1));
        assert.isFalse(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[2][0], 1, 1, 3));
        assert.isFalse(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 9, 7));
        assert.isFalse(solver.checkRowPlacement(Puzzle.puzzlesAndSolutions[1][0], 8, 9, 1));
    });
    test('valid column placement', function(){
        assert.isTrue(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[0][0], 2, 1, 5));
        assert.isTrue(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[2][0], 3, 9, 3));
        assert.isTrue(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 9, 6));
        assert.isTrue(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[1][0], 1, 2, 4));
    });
    test('invalid column placement', function(){
        assert.isFalse(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[0][0], 1, 9, 4));
        assert.isFalse(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[2][0], 8, 9, 1));
        assert.isFalse(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[0][0], 2, 8, 8));
        assert.isFalse(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[1][0], 2, 2, 9));
    });
    test('valid region (3x3 grid) placement', function(){
        assert.isTrue(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[0][0], 1, 2, 3));
        assert.isTrue(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[2][0], 9, 8, 9));
        assert.isTrue(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 6, 9));
        assert.isTrue(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[1][0], 1, 2, 4));
    });
    test('invalid region (3x3 grid) placement', function(){
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[0][0], 1, 2, 5));
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[2][0], 9, 8, 2));
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 6, 2));
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[1][0], 1, 2, 3));
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
