class Sudoku {
    private data: number[][];
  
    constructor(data: number[][]) {
      this.data = data;
    }
  
    private hasUniqueValues(arr: number[]): boolean {
      const uniqueValues = new Set(arr);
      return (
        uniqueValues.size === this.data.length &&
        [...uniqueValues].every((value) => value >= 1 && value <= this.data.length)
      );
    }
  
    private isValidRows(): boolean {
      return this.data.every((row) => this.hasUniqueValues(row));
    }
  
    private isValidColumns(): boolean {
      for (let col = 0; col < this.data.length; col++) {
        const column = [];
        for (let row = 0; row < this.data.length; row++) {
        }
        if (!this.hasUniqueValues(column)) {
          return false;
        }
      }
      return true;
    }
  
    private isValidLittleSquares(): boolean {
      const sqrtN = Math.sqrt(this.data.length);
      for (let startRow = 0; startRow < this.data.length; startRow += sqrtN) {
        for (let startCol = 0; startCol < this.data.length; startCol += sqrtN) {
          const square = [];
          for (let row = startRow; row < startRow + sqrtN; row++) {
            for (let col = startCol; col < startCol + sqrtN; col++) {
            }
          }
          if (!this.hasUniqueValues(square)) {
            return false;
          }
        }
      }
      return true;
    }
  
    public isValid(): boolean {
      return this.isValidRows() && this.isValidColumns() && this.isValidLittleSquares();
    }
  }
  
  // Пример юзеджа
  const sudokuData: number[][] = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4],
  ];
  
  const sudoku = new Sudoku(sudokuData);
  console.log(sudoku.isValid());