function binarySearch(array, x) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        if (array[mid] == x) {
            return mid
        } else if (x < array[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

function recursiveBinarySearch(array, x, start, end) {
    if (start > end) {
        return -1
    }
    let mid = start + Math.floor((end - start)/2)
    if (array[mid] == x) {
        return mid
    }
    if (array[mid] > x) {
        return recursiveBinarySearch(array, x, start, mid - 1)
    } else {
        return recursiveBinarySearch(array, x, mid + 1, end)
    }
}

console.log(binarySearch([1, 2, 3, 4, 7, 7, 10, 12, 13, 15, 16, 17, 20], 13));
let arr = [1, 2, 3, 4, 7, 7, 10, 12, 13, 15, 16, 17, 20]
console.log(recursiveBinarySearch(arr, 13, 0, arr.length - 1));