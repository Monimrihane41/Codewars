function onlyDuplicates(str) {
  
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        result += str[i];
      }
    }
    str = result;
          return (str)
  }

