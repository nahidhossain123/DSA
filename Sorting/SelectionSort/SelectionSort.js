const selectionSortAscending = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
};
const selectionSortDescending = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] < arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
};

let values = [10, 50, 30, 70, 80, 20, 90, 40];
selectionSortAscending(values, values.length);
console.log("Selection Sort Asceding:", values);
selectionSortDescending(values, values.length);
console.log("Selection Sort Decending:", values);
