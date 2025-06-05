import { swap } from "../utils/swap.js";

function selectionSort(array) {
    let n = array.length;
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        array = swap(array, i, minIndex);
    }
}

let arr = [ 64, 34, 25, 12, 55, 26, 33, 30, 22, 11, 90];

selectionSort(arr);

console.log(arr);

/*
    In selection sort we put smallest element on the left side of array at its
    sorted position after each outer iteration.
    - Inside inner loop we assume that first element is smallest and compare it
     with other element if we found smaller element than that then we update the
     value of minimum index to that index.
    - at the end of loop we swap the two element the minimum index element and 
     i th index element.

*/