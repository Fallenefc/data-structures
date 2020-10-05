const bubbleSort = (array: number[]) => {
  let anyChanges: boolean = true;

  while (anyChanges) {
    anyChanges = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i + 1], array[i]] = [array[i], array[i + 1]];
        anyChanges = true;
      }
    }
  }

  return array;
};

let arr3 = [1, 4, 9, 5, 15, 7, 2, 8, 10];
console.log(bubbleSort(arr3));
