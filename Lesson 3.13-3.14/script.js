class Rectangle {
	constructor(width, height=20) {
		this.width = width;
		this.height = height;
	}
	calcArea() {
		return this.width * this.height;
	}
}

const square = new Rectangle(10, 10);
const square2 = new Rectangle(10);

console.log(square.calcArea());
console.log(square2.calcArea());
