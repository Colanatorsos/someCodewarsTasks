function determinant(matrix: number[][]): number {
    if (matrix.length === 1) {
      return matrix[0][0];
    }
  
    if (matrix.length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
  
    let det = 0;
  
    for (let j = 0; j < matrix.length; j++) {
      const minor = matrix.slice(1).map((row) => row.slice(0, j).concat(row.slice(j + 1)));
      det += matrix[0][j] * determinant(minor) * (j % 2 === 0 ? 1 : -1);
    }
  
    return det;
  }
  