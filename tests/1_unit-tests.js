const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const Puzzle = require('../controllers/puzzle-strings.js');
let solver = new Solver;

suite('Unit Tests', () => {
    test('valid puzzle string of 81 characters', function(){
        const len = Puzzle.puzzlesAndSolutions.length;
        
        for (let i = 0; i < len; i++) {
            assert.isTrue(solver.validate(Puzzle.puzzlesAndSolutions[i][0]));
        }
    });
    test('puzzle string with invalid characters (not 1-9 or .)', function(){
        assert.isFalse(solver.validate('1.5..2.84..63.12.7.2..5.....90.1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'));
        assert.isFalse(solver.validate('5..91372.3...8.5.9.9.25..8_68.47.23...95..46.7.4.....5.2.......4..8916..85.72...3'));
        assert.isFalse(solver.validate('..839.7.575.....964.M1.......16.29846.9.312.7..754.....62..5.78.8...3.2...492...1'));
        assert.isFalse(solver.validate('.7.89.....5....3.4.2..4..l.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6'));
        assert.isFalse(solver.validate('82..4..6...16..89...98315.749.157.............S3..4...96.415..81..7632..3...28.51'));
    });
    test('puzzle string that is not 81 characters in length', function(){
        assert.isFalse(solver.validate('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37'));
        assert.isFalse(solver.validate('5..91372.3...8.5.9.9.25..8.68.47.23...'));
        assert.isFalse(solver.validate(''));
        assert.isFalse(solver.validate('.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6.'));
        assert.isFalse(solver.validate('82..4..6...16..89...98315.749.157.............53..4...96.415..81..7632..3...28.51..............'));
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
        assert.isFalse(solver.checkColPlacement(Puzzle.puzzlesAndSolutions[0][0], 3, 9, 4));
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
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[0][0], 9, 6, 8));
        assert.isFalse(solver.checkRegionPlacement(Puzzle.puzzlesAndSolutions[1][0], 1, 2, 3));
    });
    test('Valid puzzle strings pass the solver', function(){
        assert.equal(solver.solve(Puzzle.puzzlesAndSolutions[0][0]), Puzzle.puzzlesAndSolutions[0][1]);
    });
    test('Invalid puzzle strings fail the solver', function(){
        assert.isFalse(solver.solve('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37'));
        assert.isFalse(solver.solve('5..91372.3...8.5.9.9.25..8.68.47.23...'));
        assert.isFalse(solver.solve(''));
        assert.isFalse(solver.solve('.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6.'));
        assert.isFalse(solver.validate('5..91372.3...8.5.9.9.25..8.68.47.23...'));
        assert.isFalse(solver.validate(''));
    });
    test('Solver returns the expected solution for an incomplete puzzle', function(){
        const len = Puzzle.puzzlesAndSolutions.length;
        
        for (let i = 0; i < len; i++) {
            assert.equal(solver.solve(Puzzle.puzzlesAndSolutions[i][0]), Puzzle.puzzlesAndSolutions[i][1]);
        }
    });
});
