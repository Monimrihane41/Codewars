function descendingOrder(n) {
    const digits = Array.from(String(n), Number);
      //bubble algorith in  Day 4 :)
    for (let i = 0; i < digits.length - 1; i++) {
      for (let j = 0; j < digits.length - 1 - i; j++) {
        if (digits[j] < digits[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = digits[j];
          digits[j] = digits[j + 1];
          digits[j + 1] = temp;
        }
      }
    }
  
    const result = parseInt(digits.join(''));
  
    return result;
  }