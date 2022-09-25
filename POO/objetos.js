class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio
    }

    set precio(precio) {
        this._precio=precio
    }
}

const pre1= new Producto("Tablet",300000)
console.log(pre1)
pre1.precio=500000
console.log(pre1);

let prod1 = new Producto('computador', 4000000);
console.log(prod1.nombre);
prod1.nombre = "computador portatil";
console.log(prod1.nombre);
/////////////////////////////////////////////////////////////////////////////////