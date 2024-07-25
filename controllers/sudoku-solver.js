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
    const len = puzzleString.length;
    let startCol = 5;
    if (column < 4) {
      startCol = 0;
    } else if (column < 7) {
      startCol = 3;
    }

    let startRow = 5;
    if (row < 4) {
      startRow = 0;
    } else if (column < 7) {
      startRow = 3;
    }
  
    let start = (9 * (startRow)) + startCol;
    const end = (9 * (startRow + 2)) + (startCol + 3);
    const valPos = (9 * (row - 1)) + column - 1;
  
    if (valPos < len && valPos >= 0) {
      while (start < end) {
        for (let i = 0; i < 3; i++) {
          if (puzzleString[start + i] == value) {
            return false;
          }
        }
        start += 9;
      }
      return true;
    }
    return false;
  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

