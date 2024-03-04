const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function emailcheck(email) {
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
    
}
console.log(emailcheck("abdo@gmail.com")); 