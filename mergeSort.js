function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const sortedArray = [];
  const n = arr.length;
  const mid = Math.floor(n / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
    if (sortedFirstHalf[0] < sortedSecondHalf[0]) {
      sortedArray.push(sortedFirstHalf.splice(0, 1)[0]);
    } else if (sortedSecondHalf.length === 0) {
      sortedArray.push(sortedFirstHalf.splice(0, 1)[0]);
    } else {
      sortedArray.push(sortedSecondHalf.splice(0, 1)[0]);
    }
  }
  return sortedArray;
}
console.log(mergeSort([105, 79, 100, 110]));
