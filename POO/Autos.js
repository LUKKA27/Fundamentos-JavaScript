class Vehiculo {
    constructor(noSerieM,marca,año,precio) {
        this._noSerieM=noSerieM;
        this._marca=marca;
        this._año=año;
        this._precio=precio;
    }
    set noSerieM(noSerieM) {
    	this._noSerieM=noSerieM;
    }
    set marca(marca) {
    	this._marca=marca;
    }
    set año(año) {
    	this._año=año;
    }
    set precio(precio) {
    	this._precio=precio;
    }
    get noSerieM() {
    	return this._noSerieM;
    }
    get marca() {
    	return this._marca;
    }
    get año() {
    	return this._año;
    }
    get precio() {
    	return this._precio;
    }
	datoscompletos() {
		return `El numero de serie del motor es ${this.noSerieM}, su marca es ${this.marca}, el modelo es del año ${this.año}, su precio en dolares es 
		${this.precio}$, y el numero de pasajeros es ${this.pasajeros} `

	}
}

class Compactos extends Vehiculo{
	constructor(noSerieM,marca,año,precio,pasajeros) {
		super(noSerieM,marca,año,precio);
		this._pasajeros=pasajeros;
	}
	set pasajeros(pasajeros) {
		this._pasajeros=pasajeros;
	}
	get pasajeros() {
		return this._pasajeros;
	}

}
const comp1=new Compactos (0323,"Renault",2018,50000000,4)
console.log(comp1);
console.log(comp1.datoscompletos())

class Lujo extends Vehiculo{
	constructor(noSerieM,marca,año,precio,pasajeros) {
		super(noSerieM,marca,año,precio);
		this._pasajeros=pasajeros;
	}
	set pasajeros(pasajeros) {
		this._pasajeros=pasajeros;
	}
	get pasajeros() {
		return this._pasajeros;
	}
}
const lujo1=new Lujo (7777,"Tesla",2025,100000000,2)
console.log(lujo1);

class Vagonetas extends Vehiculo{
	constructor(noSerieM,marca,año,precio,pasajeros) {
		super(noSerieM,marca,año,precio);
		this._pasajeros=pasajeros;
	}
	set pasajeros(pasajeros) {
		this._pasajeros=pasajeros;
	}
	get pasajeros() {
		return this._pasajeros;
	}
}
const vago1=new Vagonetas (5050,"Ferrari",2000,600000000,4)
console.log(vago1);

class Camionetas extends Vehiculo{
	constructor(noSerieM,marca,año,precio,carga,ejes,rodadas) {
		super(noSerieM,marca,año,precio);
		this._carga=carga;
		this._ejes=ejes;
		this._rodadas=rodadas;
	}
	set carga(carga) {
		this._carga=carga;
	}
	set ejes(ejes) {
		this._ejes=ejes;
	}
	set rodadas(rodadas) {
		this._rodadas=rodadas;
	}
	get carga() {
		return this._carga;
	}
	get ejes() {
		return this._ejes;
	}
	get rodadas() {
		return this._rodadas;
	}
}
const cami1=new Camionetas (6666,"Toyota",2020,600000000,"100kg",3,4)
console.log(cami1);