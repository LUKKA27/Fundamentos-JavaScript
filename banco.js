class Cuenta {
	constructor (Nocuenta,saldo){
		this._Nocuenta=Nocuenta;
		this._saldo=saldo;
	}
	set Nocuenta(Nocuenta){
		this._Nocuenta=Nocuenta;
	}
	set saldo(saldo){
		this._saldo=saldo;
	}
	get Nocuenta() {
		return this._Nocuenta;
	}
	get saldo() {
		return this._saldo;
	}
}
const cuen1= new Cuenta(1005,170000)
console.log(cuen1)
cuen1.Nocuenta=1007
console.log(`Su nuevo numero de cuenta es ${cuen1.Nocuenta}`)


class Corriente extends Cuenta {
	constructor (Nocuenta,saldo,contraseña,chequera) {
		super(Nocuenta,saldo);
		this._contraseña=contraseña;
		this._chequera=chequera;
	}
	set contraseña(contraseña) {
		this._contraseña=contraseña;
	}
	set chequera(chequera) {
		this._chequera=chequera;
	}
	get contraseña() {
		return this._contraseña;
	}
	get chequera() {
		return this._chequera;
	}
}
const cuen2= new Corriente (1012,500000,2708,30)
console.log(cuen2)
cuen2.contraseña=2703
console.log(`Su nueva contraseña es ${cuen2.contraseña}`)


class Ahorro extends Cuenta {
	constructor (Nocuenta,saldo,contraseña,tasaInteres) {
		super(Nocuenta,saldo);
		this._tasaInteres=tasaInteres;
		this._contraseña=contraseña;
	}
	set contraseña(contraseña) {
		this._contraseña=contraseña;
	}
	set tasaInteres(tasaInteres) {
		this._tasaInteres=tasaInteres;
	}
	get tasaInteres() {
		return this._tasaInteres;
	}
	get contraseña() {
		return this._contraseña;
	}
}
const cuen3= new Ahorro (2003,250000,7777,0.03)
console.log(cuen3)
cuen3.saldo=500000
cuen3.tasaInteres=0.04
console.log(`Su nuevo saldo es ${cuen3.saldo}, debido a esto su tasa de interes sube a ${cuen3.tasaInteres}`)
