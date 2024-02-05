function setReducer(arr) {
    let result = arr.slice(); // create a copy of the array

    while (result.length > 1) {
        let reduced = [];

        for (let i = 0; i < result.length; i++) {
            let count = 1;

            while (result[i] === result[i + 1]) {
                count++;
                i++;
            }

            reduced.push(count);
        }

        result = reduced;
    }

    return result[0];
}


setReducer[5,5,2,4,8,7,4,4,9,9,9];