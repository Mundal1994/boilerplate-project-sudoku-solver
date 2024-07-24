class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const len = puzzleString.length;
    let start = (9 * (row - 1));
    const end = start + 9;
    const valPos = start + column - 1;

    if (valPos < len && valPos >= 0) {
      let numbers = '';
      while (start < end) {
        if (start != valPos && puzzleString[start] != '.') {
          numbers += puzzleString[start];
        }
        ++start;
      }

      if (!numbers.includes(value)) {
        return true;
      }
    }
    return false;
    
    /* to get position A1 
      if we have row 4 and column 5
      to find that in the string that is xlong 

      9 * row(4) + column - 1 (array is zero indexed) == position in string.
    */
  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

