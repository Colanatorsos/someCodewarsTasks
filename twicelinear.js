function dblLinear(n) {
    const u = [1];
    let i = 0;
    let x, y;
  
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