function narcissistic(value) {
   let seperate = String(value).split("")
    let sum = 0
    for (let i = 0; i < seperate.length; i++) {
      sum += Math.pow(seperate[i], seperate.length)
    }   
   return sum === value
  }
  
  narcissistic(153) 
  



