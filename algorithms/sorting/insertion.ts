const insertionSort = (array: number[]) => {

  for (let i:number = 0; i<array.length; i++) {
    for (let j:number = 0; j<array.length; j++) {
      if (array[j] > array[i]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }

  return array;
}

let arr = [1, 4, 9, 5, 15, 7, 2, 8, 10]
console.log(insertionSort(arr))