// Напишите функцию для применения
// алгоритма сортировки пузырьком.

function BubbleSort(array, reverse=false) {

    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if(!reverse){
        if (array[j] > array[j + 1]) {
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }}
        if(reverse){
        if (array[j] < array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
          }}
      }
    }
    return array
}

console.log(BubbleSort([2,6,3,8,53,7,4,2,8,44,2,4], true));