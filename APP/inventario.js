const Producto = require('./producto.js')
class Inventario extends Producto {
    constructor(stock, fecha_ingreso, fecha_salida, ganancias, perdidas, sku, nombre, precio, decripcion, lente, mrc) {
        super(sku, nombre, precio, decripcion, lente, mrc)
        this._stock = stock;
        this._fecha_ingreso = fecha_ingreso;
        this._fecha_salida = fecha_salida;
        this._ganancias = ganancias;
        this._perdidas = perdidas;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock;
    }

    get fecha_ingreso() {
        return this._fecha_ingreso;
    }

    set fecha_ingreso(fecha_ingreso) {
        this._fecha_ingreso = fecha_ingreso;
    }

    get fecha_salida() {
        return this._fecha_salida;
    }

    set fecha_salida(fecha_salida) {
        this._fecha_salida = fecha_salida;
    }

    get ganancias() {
        return this._ganancias;
    }

    set ganancias(ganancias) {
        this._ganancias = ganancias;
    }

    get perdidas() {
        return this._perdidas;
    }

    set perdidas(perdidas) {
        this._perdidas = perdidas;
    }

    buscar(busqueda) {
        if (busqueda == this._nombre || busqueda == marca) {
            console.log(producto);
        }
    }

    crear(sku, nombre, precio, descripcion, lente, marca, imagen, valor_compra) {

        return `Producto creado ${producto}`
    }
}



module.exports = Inventario;