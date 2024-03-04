function moveZeros(arr){
    let zeroCount = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    return result;
}