const Merge = (arr, l, mid, r) => {
  let n1 = mid - l + 1;
  let n2 = r - mid;

  const leftSubArray = new Array(n1);
  const rightSubArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftSubArray[i] = arr[l + i];
  }
  for (let i = 0; i < n1; i++) {
    rightSubArray[i] = arr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;
  while (i < n1 && j < n2) {
    if (leftSubArray[i] <= rightSubArray[j]) {
      arr[k] = leftSubArray[i];
      i++;
    } else {
      arr[k] = rightSubArray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = leftSubArray[i];
    i++;
    k++;
  }

  while (i < n2) {
    arr[k] = rightSubArray[j];
    j++;
    k++;
  }
};

const MergeSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  MergeSort(arr, l, m);
  console.log(l, m);
  MergeSort(arr, m + 1, r);
  Merge(arr, l, m, r);
};

let arr = [12, 11, 13, 5, 6, 7];
let l = 0;
let r = arr.length - 1;

MergeSort(arr, l, r);

console.log("Merge Sort", arr);
