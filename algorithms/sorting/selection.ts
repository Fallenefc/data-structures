const selectionSort = (array: number[]) => {
  for (let i: number = 0; i < array.length; i++) {
    let currentMin: number = i;
    for (let j: number = i + 1; j < array.length; j++) {
      if (array[currentMin] > array[j]) {
        currentMin = j;
      }
    }
    [array[currentMin], array[i]] = [array[i], array[currentMin]];
  }
  return array;
};

let arr2 = [1, 4, 9, 5, 15, 7, 2, 8, 10];
console.log(selectionSort(arr2));
