const Ventas=require ('./ventas.js');
class Almacen extends Venta {
	constructor(producto,precio,cantidad,nombre_de_almacen,direccion) {
		super(producto,precio,cantidad)
		this._nombre_de_almacen=nombre_de_almacen;
		this._direccion=direccion;
	}
	set nombre_de_almacen(nombre_de_almacen) {
		this._nombre_de_almacen=nombre_de_almacen;
	}
	set direccion(direccion) {
		this._direccion=direccion;
	}
	get nombre_de_almacen() {
		return this._nombre_de_almacen;
	}
	get direccion() {
		return this._direccion;
	}
}
const alm1=new Almacen("lensexpress","calle 37 /107-388")
console.log(alm1)
module.exports=Almacen;