'use strict'

// Напишите функцию, которая принимает
// массив и значение, и возвращает true, если
// это значение присутствует в массиве, и false,
// если нет. Используйте строгий режим.

function IsIncludedInArray (array, variable) {
    return array.includes(variable)
}

console.log(IsIncludedInArray([1,2,3], 1));