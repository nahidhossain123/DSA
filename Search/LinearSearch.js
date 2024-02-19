//Linear Search--->sequential searching algorithm
//compare with the each and every element in the input array and return true if value found or false otherwise

//Steps:
//step1: start from the 0th index of the input array
//Step2: match with the each array element
//step3: If match found return the mathced position or compare with the next element in the array
//step4: repeat the step3 until the array end

const LinearSearch = (arr, length, searchItem) => {
  for (let i = 0; i < length; i++) if (arr[i] == searchItem) return i;
  return -1;
};

let values = [10, 50, 30, 70, 80, 20, 90, 40];
console.log("LinearSearch of 70 is", LinearSearch(values, values.length, 70));

// Complexity:
// Best Case: 0(1)
// Worst Case: 0(n)
// Average Case: 0(n)
