// Напишите функцию, которая принимает
// строку и выводит в консоль последний
// символ строки.

function findLastSymbol (str) {
    return str.slice(-1)
}

console.log(findLastSymbol("Hello world"));