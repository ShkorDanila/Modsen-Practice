// Напишите функцию, которая использует блок
// try-catch для перехвата и обработки ошибки
// TypeError при доступе к свойству
// неопределенного объекта.

function DivideArray(array, divider) {
    try {

        return array.map((element) => { return Math.floor(element/divider)})

    } catch (e) {
        if(e instanceof TypeError) {
            console.log("\n" + e.name);
            console.log(e.message);
            
        return null
        }

    }
}

console.log(DivideArray(1, 2));