'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      const sudoku = req.body.puzzle;
      console.log("sudoku: ", sudoku);
      if (!sudoku) {
        return res.json({error: 'Error: missing Sudoku string.'});
      }

      const isValid = solver.validate(sudoku);
      if (isValid != true) {
        if (isValid == 'Expected puzzle to be 81 characters long') {
          return res.json({error: 'Expected puzzle to be 81 characters long'});
        }
        else if (isValid == 'Invalid characters in puzzle') {
          return res.json({error: 'Invalid characters in puzzle'});
        }
        return res.json({error: 'Puzzle cannot be solved'});
      }

      const result = solver.solve(sudoku);
      if (!result) {
        return res.json({error: 'Puzzle cannot be solved'});
      }
      res.json({solution: result});
    });
};
