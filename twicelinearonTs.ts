function dblinear(n: number): number {
    const u: number[] = [1];
    let i: number = 0;
    let x: number, y: number;
  
    while (i < n) {
      x = 2 * u[i] + 1;
      y = 3 * u[i] + 1;
  
      if (x < y) {
        u.push(x);
        i++;
      } else if (x > y) {
        u.push(y);
        i++;
      } else {
        u.push(x);
        i++;
      }
    }
  
    return u[n];
  }

  console.log(dblLinear(10)); 