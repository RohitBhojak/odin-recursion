function mergeSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;
  let mid = Math.floor(n / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(arr1, arr2) {
  const merged = [];
  let m = arr1.length,
    n = arr2.length;
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1, 8];

console.log(mergeSort(arr));
