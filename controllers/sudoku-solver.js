class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const len = puzzleString.length;
    let start = (9 * (row - 1));
    const end = start + 9;
    const valPos = start + column - 1;

    if (valPos < len && valPos >= 0) {
      while (start < end) {
        if (puzzleString[start] == value) {
          return false;
        }
        ++start;
      }

      return true;
    }
    return false;
  }

  checkColPlacement(puzzleString, row, column, value) {
    const len = puzzleString.length;
    let start = column - 1;
    const end = len;
    const valPos = (9 * (row - 1)) + start;
  
    if (valPos < len && valPos >= 0) {
      while (start < end) {
        if (puzzleString[start] == value) {
          return false;
        }
        start += 9;
      }

      return true;
    }
    return false;
  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

