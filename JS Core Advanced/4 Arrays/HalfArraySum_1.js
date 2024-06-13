// Напишите функцию, которая принимает
// массив с числами и находит сумму первой
// половины элементов этого массива.

function HalfArraySum (array) {
    return array.slice(0, array.length / 2).reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(HalfArraySum([1,2,3,4,5,6,7,8,9,10]));