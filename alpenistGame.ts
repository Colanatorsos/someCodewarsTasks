function pathFinder(maze: string): boolean {
    const mazeArray = maze.split('\n').map((row) => row.split(''));
  
    function canMove(x: number, y: number): boolean {
      if (x < 0 || x >= mazeArray.length || y < 0 || y >= mazeArray.length) {
        return false;
      }
      return mazeArray[x][y] === '.';
    }
  
    function explore(x: number, y: number): boolean {
      if (x === mazeArray.length - 1 && y === mazeArray.length - 1) {
        return true;
      }
  
      if (!canMove(x, y)) {
        return false;
      }
  
      mazeArray[x][y] = 'X'; 
  
    
      const directions = [
        [0, 1], // Right
        [0, -1], // Left
        [1, 0], // Down
        [-1, 0], // Up
      ];
  
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (explore(newX, newY)) {
          return true;
        }
      }
  
      return false;
    }
  
    return explore(0, 0);
  }
  
 
  const maze = `
  ..W..
  ..W..
  ..W..
  ..W..
  ..W..
  `;
  
  console.log(pathFinder(maze)); 
  