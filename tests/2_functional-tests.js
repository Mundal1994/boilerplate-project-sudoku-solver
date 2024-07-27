const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');
const puzzle = require('../controllers/puzzle-strings.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    suite('Solve a Puzzle Tests', () => {
        test('valid puzzle string: POST request to /api/solve', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .send({
                puzzle: puzzle.puzzlesAndSolutions[0][0]
            })
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['solution']);
                assert.equal(res.body.solution, puzzle.puzzlesAndSolutions[0][1]);
                done();
            });
        });
        test('missing puzzle string: POST request to /api/solve', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Error: missing Sudoku string.');
                done();
            });
        });
        test('invalid characters: POST request to /api/solve', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .send({
                puzzle: '.7.89.....5....3.4.2..4..l.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6'
            })
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Invalid characters in puzzle');
                done();
            });
        });
        test('incorrect length: POST request to /api/solve', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .send({
                puzzle: '.7.89.....5....3.4.2..4..'
            })
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Expected puzzle to be 81 characters long');
                done();
            });
        });
        test('Solve a puzzle that cannot be solved: POST request to /api/solve', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .send({
                puzzle: '135762984946381257728469....94.17...812.3674.3.7.24.96473298561581673429269145378'
            })
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['error']);
                assert.equal(res.body.error, 'Puzzle cannot be solved');
                done();
            });
        });
    });
    suite('Check a Puzzle Tests', () => {
        test('a puzzle placement with all fields: POST request to /api/check', function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/solve')
            .send({
                puzzle: puzzle.puzzlesAndSolutions[0][0],
                coordinate: 'A2',
                value: 3
                
            })
            .end(function(err, res){
                assert.equal(res.status, 200);
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ['solution']);
                assert.equal(res.body.solution, puzzle.puzzlesAndSolutions[0][1]);
                done();
            });
        });
        test('a puzzle placement with single placement conflict: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with multiple placement conflicts: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with all placement conflicts: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with missing required fields: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with invalid characters: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with incorrect length: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with invalid placement coordinate: POST request to /api/check', function(done){
            //done
        });
        test('a puzzle placement with invalid placement value: POST request to /api/check', function(done){
            //done
        });
    });
});
