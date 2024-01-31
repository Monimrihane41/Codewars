function maskify(str) {
    if (str.length <= 4) {
        return str;
    } else {
        return '#'.repeat(str.length - 4) + str.slice(-4);
    }
}