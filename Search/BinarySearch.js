//Binary Search----is a sorting algorithm for Finding an element position in a sorted array
//Array must be sorted

// Steps
// Step1: set start and position
// Step2: find the mid positnon of the input array
// Step3: if the mid position equal to searched value then return the positon
// Step4: if searched value is greater than mid then serch on the right sight or left side otherwise
// Step5: repeat all the previouse steps until array end

const BinarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] == value) {
      return mid;
    }
    if (value > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let values = [10, 50, 30, 70, 80, 20, 90, 40];
console.log("BinarySearch of 70 is", BinarySearch(values, 70));

// Complexity:
// Best Case: O(1)
// Worst Case: O(logn)
// Average Case: O(logn)
