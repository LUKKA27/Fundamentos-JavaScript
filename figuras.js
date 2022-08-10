class Poligono {
	constructor (lados,base,altura) {
		this._lados=lados;
		this._base=base;
		this._altura=altura;
	} 
	set lados(lados) {
		this._lados=lados;
	}
	set base(base) {
		this._base=base;
	}
	set altura(altura) {
		this._altura=altura;
	}
	get lados() {
		return this._lados;
	}
	get base() {
		return this._base;
	}
	get altura() {
		return this._altura;
	}
}
const figura=new Poligono(2,5,6);
console.log(figura)


class Rectangulo extends Poligono {
	constructor(lados,base,altura,perimetro) {
		super(lados,base,altura);
		this._perimetro=perimetro;
	}
	set perimetro(perimetro) {
		this._perimetro=perimetro;
	}
	get perimetro() {
		return this._perimetro;
	}
	// peri() {
	// 	return (2*_altura)+(2*_base)
}
const figura1=new Rectangulo(5,4,5,18);
console.log(figura1)


class Triangulo extends Poligono {
	constructor(lados,base,altura,perimetro) {
		super(lados,base,altura);
		this._perimetro=perimetro;
	}
	set perimetro(perimetro) {
		this._perimetro=perimetro;
	}
	get perimetro() {
		return this._perimetro;
	}
	// peri() {
	// 	return (3*lados)}
}
const figura2= new Triangulo(4,3,3,12)
console.log(figura2)


class Cuadrado extends Poligono {
	constructor(lados,base,altura,perimetro) {
		super(lados,base,altura);
		this._perimetro=perimetro;
	}
	set perimetro(perimetro) {
		this._perimetro=perimetro;
	}
	get perimetro() {
		return this._perimetro;
	}
	// peri() {
	// 	return (4*lados)}
}
const figura3= new Cuadrado(8,4,5,32)
console.log(figura3)