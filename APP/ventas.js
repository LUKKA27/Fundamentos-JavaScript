class Ventas {
	constructor(producto,precio,cantidad) {
		this._producto=producto;
		this._precio=precio;
		this._cantidad=cantidad;
	}
	set producto(producto) {
		this._producto=producto;
	}
	set precio(precio) {
		this._precio=precio;
	}
	set cantidad(cantidad) {
		this._cantidad=cantidad;
	}
	get producto() {
		return this._producto;
	}
	get precio() {
		return this._precio;
	}
	get cantidad() {
		return this._cantidad;
	}
	ventas(cantidad,precio) {
		return (cantidad * precio);
	}
	devolucion() {
        return `El producto ${this.producto} con un valor de ${this.precio}$ fue devuelto. `
    }
}
const VEN1=new Ventas("Gafas de sol",500000,5)
console.log(VEN1)
console.log(VEN1.ventas())
module.exports=Ventas;