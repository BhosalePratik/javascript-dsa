function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}

let arr = [ 64, 34, 25, 12, 55, 26, 33, 30, 22, 11, 90];

insertionSort(arr);

console.log(arr);


/*
    Insertion sort works on principal of keeping sorted part on the left of array
     and putting first element of unsorted part on its sorted place in sorted part
    after each outer iteration.
    - key contains the value of index in question in outer loop, it holds the element
    till we make him place at its sorted position.
*/