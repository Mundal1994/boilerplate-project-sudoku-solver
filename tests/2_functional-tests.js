const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    /*suite('Solve a Puzzle Tests', () => {
        test('valid puzzle string: POST request to /api/solve', function(done){
            //done
        });
        test('missing puzzle string: POST request to /api/solve', function(done){
            //done
        });
        test('invalid characters: POST request to /api/solve', function(done){
            //done
        });
        test('incorrect length: POST request to /api/solve', function(done){
            //done
        });
        test('Solve a puzzle that cannot be solved: POST request to /api/solve', function(done){
            //done
        });
    });*/
    /*suite('Check a Puzzle Tests', () => {
        test('a puzzle placement with all fields: POST request to /api/check', function(done){
            //done
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
    });*/
});
