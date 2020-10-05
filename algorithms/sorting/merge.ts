const mergeSort = (array: number[]) => {
  if (array.length <= 1) {
    return;
  }

  let medium: number = Math.floor(array.length / 2);
  let arrayLeft: number[] = array.slice(0, medium);
  let arrayRight: number[] = array.slice(medium);

  mergeSort(arrayLeft);
  mergeSort(arrayRight);

  const theMerger = (left: number[], right: number[], arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (left[0] < right[0] || !right.length) {
        arr[i] = left.shift();
      } else {
        arr[i] = right.shift();
      }
    }
  };

  theMerger(arrayLeft, arrayRight, array);

  return array;
};

let mergeArray = [5, 3, 15, 12, 6, 1, 2, 9];
console.log(mergeSort(mergeArray));
