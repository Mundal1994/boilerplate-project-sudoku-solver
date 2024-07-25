class SudokuSolver {

  validate(puzzleString) {
    const len = puzzleString.length;

    if (len != 81) {
      console.log("Error: puzzle string is not 81 characters long, current len: ", len);
      return false;
    }
    const validChar = '123456789.';

    for (let i = 0; i < len; i++) {
      if (!validChar.includes(puzzleString[i])) {
        console.log("Error: puzzle string contains unvalid character: ", puzzleString[i]);
        return false;
      }
      if (puzzleString[i] != '.') {
        const row = Math.floor((i / 9) + 1);
        const col = (i % 9) + 1;
        const val = puzzleString[i];
        
        if (!this.checkRowPlacement(puzzleString, row, col, val) || 
          !this.checkColPlacement(puzzleString, row, col, val) || 
          !this.checkRegionPlacement(puzzleString, row, col, val)) {
          return false;
        }
      }
    }
    return true;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const len = puzzleString.length;
    let start = (9 * (row - 1));
    const end = start + 9;
    const valPos = start + column - 1;

    if (valPos < len && valPos >= 0) {
      while (start < end) {
        if (start != valPos && puzzleString[start] == value) {
          console.log("Row Placement is false: Pos: ", start, " with value: ", value, " already exist");
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
        if (start != valPos && puzzleString[start] == value) {
          console.log("Column placement is false: Pos: ", start, " with value: ", value, " already exist");
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
    let startCol = 6;
    if (column < 4) {
      startCol = 0;
    } else if (column < 7) {
      startCol = 3;
    }

    let startRow = 6;
    if (row < 4) {
      startRow = 0;
    } else if (row < 7) {
      startRow = 3;
    }
  
    let start = (9 * (startRow)) + startCol;
    const end = (9 * (startRow + 2)) + (startCol + 3);
    const valPos = (9 * (row - 1)) + column - 1;

    if (valPos < len && valPos >= 0) {
      while (start < end) {
        for (let i = 0; i < 3; i++) {
          if (start + i != valPos && puzzleString[start + i] == value) {
            console.log("Region placement is false: Pos: ", start + i, " with value: ", value, " already exist");
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

