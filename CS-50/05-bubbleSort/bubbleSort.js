/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer Sciencedom.
 * It works by starting at the first element of an array and comparing it to the second element;
 * if the first element is greater than the second element, it swaps the two.
 * It then compares the second to the third, and the third to the fourth, and so on;
 * in this way, the largest values "bubble" to the end of the array.
 * Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm?
 * If you don't already know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass,
 * if no elements are swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate through the array?
 * Make it happen, boss. Again: Has the time complexity of your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/
// Feel free to add helper functions if needed.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

const bubbleSort2 = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr
}

console.log(bubbleSort([4, 3, 2, 1, 7, 115, 9, 1, 0.5])) // [ 0.5, 1, 1, 2, 3, 4, 7, 9, 115 ]
console.log(bubbleSort2([4, 3, 2, 1, 7, 115, 9, 1, 0.5])) // [ 0.5, 1, 1, 2, 3, 4, 7, 9, 115 ]