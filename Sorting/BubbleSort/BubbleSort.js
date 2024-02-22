const BubbleSortAscending = (arr, n) => {
  for (let step = 0; step < n - 1; step++) {
    for (let i = step + 1; i < n; i++) {
      if (arr[step] > arr[i]) {
        let temp = arr[step];
        arr[step] = arr[i];
        arr[i] = temp;
      }
    }
  }
};

let values = [10, 50, 30, 70, 80, 20, 90, 40];
BubbleSortAscending(values, values.length);
console.log("Selection Sort Asceding:", values);
