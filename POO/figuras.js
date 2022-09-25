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

	perirectangulo(_altura,_base) {
		return (2*this._altura)+(2*this._base)
	}

	arearectangulo(_altura,_base){
		return (this._altura * this._base)
	}

	peritriangulo(_base) {
		return (3*this._base)}

	areatriangulo(_base,_altura){
		return ((this._base * this._altura)/2)
	}
	pericuadrado(_base) {
		return (this._base)*4
	}
	areacuadrado(_base) {
		return Math.pow(this._base,2)
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
}

const figura1=new Rectangulo(4,4,5,18);
console.log(figura1)
console.log(figura1.perirectangulo())
console.log(figura1.arearectangulo())


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
}
const figura2= new Triangulo(3,3,3,12)
console.log(figura2)
console.log(figura2.peritriangulo())
console.log(figura2.areatriangulo())


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
const figura3= new Cuadrado(4,5,5,32)
console.log(figura3)
console.log(figura3.pericuadrado())
console.log(figura3.areacuadrado())