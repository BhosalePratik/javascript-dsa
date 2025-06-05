import { swap } from "../utils/swap.js";


function bubbleSort(array) {
    let n = array.length;
    let swapped;
    for(let i = 0; i < n - 1; i++) {
        swapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                array = swap(array, j, j + 1);
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
}


let arr = [ 64, 34, 25, 12, 55, 26, 33, 30, 22, 11, 90];

bubbleSort(arr);

console.log(arr);


/*
    In bubble sort we put the largest element in the array
    at its sorted position on the right side of array after each iteration.
    - Inside inner loop we compare first two elements, if they are unsorted
    we swap their position and repeat till we reach the end of array
    - after one iteration we will have largest element in sorted order on the right side
    and we repeat this process for all elements using outer loop.
    - we put swapped flag to check whether any swapping did happened or not in inner loop.
    if no swapping in particular iteration of inner loop we know that array is sorted and
    we break the outer loop
*/