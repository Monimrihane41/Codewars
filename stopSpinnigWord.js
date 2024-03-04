function spinWords(string){

    let result = [];
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            result.push(words[i].split('').reverse().join(''));


        } else {
            result.push(words[i]);
        }
    }
    return result.join(' ') // to return a string instead of an array;


}

