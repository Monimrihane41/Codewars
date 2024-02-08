function narcissistic(value) {
   let seperate = String(value).split("")
    let power = seperate.length
    let sum = 0
    for (let i = 0; i < seperate.length; i++) {
      sum += Math.pow(seperate[i], power)
    }   
    if (sum === value) {
      console.log(true)
    } else {
      console.log(false)
    }

 

  }
  
  narcissistic(92727) ;


