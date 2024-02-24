const InsertionSort = (arr, n) => {
  for (let step = 1; step < n; step++) {
    let key = arr[step];
    let i = step - 1;
    while (i >= 0 && key < arr[i]) {
      //12> 11 13 56
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
};

let arr = [12, 11, 13, 5, 6];
let n = arr.length;

InsertionSort(arr, n);
console.log("Insertion Sort", arr);
