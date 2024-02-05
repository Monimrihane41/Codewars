
function group(arr) {
    const result = [];
    arr.forEach(number => {
        const subarray = result.find(arr => arr[0] === number);
        if (subarray) {
            subarray.push(number);
        } else {
            result.push([number]);
        }
    });
    return result;
}
