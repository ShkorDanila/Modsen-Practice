// Создайте класс под названием
// «Прямоугольник» со свойствами ширины и
// высоты. Включите два метода расчета
// площади и периметра прямоугольника.
// Создайте экземпляр класса «Прямоугольник»
// и вычислите его площадь и периметр.

class Rectangle {
    constructor (width, height) {
        this.width = width
        this.height = height
    }
    getPerimeter() {
        return (this.width + this.height)*2
    }
    getSqArea() {
        return this.width*this.height
    }
    setHeight() {
        return this.height
    }
    setWidth() {
        return this.width
    }
}

let rectangle = new Rectangle(4,6)
console.log("Периметр:" + rectangle.getPerimeter() + " | Площадь:" + rectangle.getSqArea());