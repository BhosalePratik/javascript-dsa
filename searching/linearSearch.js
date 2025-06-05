function linearSearch(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return true
        } 
    }
    return false
}

console.log(linearSearch([1, 2, 3, 7, 4, 8, 5, 6, 7, 16, 8, 9], 6))