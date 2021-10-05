function found(a, index) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === index) {
            return true;
        }
    }
    return -1;
}

console.log(found);