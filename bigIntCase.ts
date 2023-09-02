function fib(n) {
    const sqrt5 = BigInt(5)
    const phi = (BigInt(1) + sqrt5) / BigInt(2);
    const psi = (BigInt(1) - sqrt5) / BigInt(2);
  
    if (n >= 0) {
      return (BigInt(1) / sqrt5) * (phi ** BigInt(n) - psi ** BigInt(n));
    } else {
      const m = BigInt(-n);
      if (m % BigInt(2) === BigInt(0)) {
        return -((BigInt(1) / sqrt5) * (phi ** m - psi ** m));
      } else {
        return (BigInt(1) / sqrt5) * (phi ** m - psi ** m);
      }
    }
  }
  
  
  
  
  
  