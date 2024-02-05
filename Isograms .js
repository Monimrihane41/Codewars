function isIsogram(str) {
    str = str.toLowerCase(); // Convert to lowercase to handle case-insensitive comparison

    // Iterate through each character in the string
    for(let i=0 ; i<str.length; i++){
        // Iterate through each character again
        for(let j=i+1; j<str.length; j++){
            // Check if the charCodeAt of the current character is equal to the charCodeAt of any other character
            if(str.charCodeAt(i) == str.charCodeAt(j)){
                return console.log(false); // If equal, it is not an isogram
            }
        }
    }

    // If we've made it through the loop without returning false, it's an isogram
    return console.log(true);
}
isIsogram("Dermatoglyphics"); 
