'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle, coordinate, value} = req.body;
      
      if (!puzzle || !coordinate || !value) {
        return res.json({error: 'Required field(s) missing'});
      }

      // check if valid value
      if (value < 1 || value > 9) {
        return res.json({error: 'Invalid value'});
      }

      // check if valid coordinate
      let isValidCoordinate = true;
      let row;
      let col;

      if (coordinate.length == 2) {
        const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;
        row = alphaVal(coordinate[0]);
        col = Number(coordinate[1]);
        
        if (!row || !col || row < 1 || row > 9 || col < 1 || col > 9) {
          isValidCoordinate = false;
        }
      } else {
        isValidCoordinate = false;
      }
      if (!isValidCoordinate) {
        return res.json({error: 'Invalid coordinate'});
      }

      const result = solver.validate(puzzle);
      if (result != true) {
        if (result != false) {
          return res.json({error: result});
        }
        return res.json({error: 'Invalid puzzle'});
      }

      // check if valid position
      let errorMessage = [];
      if (!solver.checkRowPlacement(puzzle, row, col, value)) {
        errorMessage.push('row');
      }
      if (!solver.checkColPlacement(puzzle, row, col, value)) {
        errorMessage.push('column');
      }
      if (!solver.checkRegionPlacement(puzzle, row, col, value)) {
        errorMessage.push('region');
      }
      if (errorMessage.length != 0) {
        return res.json({
          valid: false,
          conflict: errorMessage
        });
      }

      return res.json({
        valid: true
      });
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      const sudoku = req.body.puzzle;
      if (!sudoku) {
        return res.json({error: 'Error: missing Sudoku string.'});
      }

      const result = solver.solve(sudoku);
      if (result.length != 81) {
        if (result != false) {
          return res.json({error: result});
        }
        return res.json({error: 'Puzzle cannot be solved'});
      }
      res.json({solution: result});
    });
};
