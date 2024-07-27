'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const {puzzle, coordinate, value} = req.body;
      console.log("puzzle: ", puzzle, "coordinate: ", coordinate, "value: ", value);
      if (!puzzle || !validation || !value) {
        return res.json({error: 'Required field(s) missing'});
      }

      // check if valid value
      if (value < 1 || value > 9) {
        return res.json({error: 'Invalid value'});
      }

      // check if valid coordinate
      const isValidCoordinate = false;
      if (!isValidCoordinate) {
        return res.json({error: 'Invalid coordinate'});
      }

      // check if valid puzzle
      const skipErrorMessage = 'columnrowregion';
      const result = solver.validate(puzzle);
      if (result != true && !skipErrorMessage.includes(skipErrorMessage)) {
        return res.json({error: result});
      }
      res.json({
        valid: result == true ? true : false,
        conflict: [/*row, column and/or region*/],

      });
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      const sudoku = req.body.puzzle;
      if (!sudoku) {
        return res.json({error: 'Error: missing Sudoku string.'});
      }

      const skipErrorMessage = 'columnrowregion';
      const result = solver.solve(sudoku);
      if (result.length != 81) {
        if (!skipErrorMessage.includes(result)) {
          return res.json({error: result});
        }
        return res.json({error: 'Puzzle cannot be solved'});
      }
      res.json({solution: result});
    });
};
