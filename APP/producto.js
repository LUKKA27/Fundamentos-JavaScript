class Producto {
    constructor(sku, nombre, precio, decripcion, lente, mrc, imgen, vlor_comp) {
        this._sku = sku;
        this._nombre = nombre;
        this._precio = precio;
        this._decripcion = decripcion;
        this._lente = lente;
        this._mrc = mrc;
        this._imgen = imgen;
        this._vlor_comp = vlor_comp;
    };

    get sku() { return this._sku }
    get nombre() { return this._nombre }
    get precio() { return this._precio }
    get decripcion() { return this._decripcion }
    get lente() { return this._lente }
    get mrc() { return this._mrc }
    get imgen() { return this._imgen }
    get vlor_comp() { return this._vlor_comp }

    set nombre(nombre) { this._nombre = nombre }
    set precio(precio) { this._precio = precio }
    set decripcion(decripcion) { this._decripcion = decripcion }
    set lente(lente) { this._lente = lente }
    set mrc(mrc) { this._mrc = mrc }
    set imgen(imgen) { this._imgen = imgen }
    set vlor_comp(vlor_comp) { this._vlor_comp = vlor_comp }

    publicar() { return (`${this._sku}${this._nombre}${this._precio}${this._decripcion}${this._lente}${this._mrc}${this._imgen}`) }
    insertar_inventario(producto) {
        this._producto.push(inventario1)
    }
}
var gafa1 = new Producto(15478, " Gafa prada ", 100000, " Gafa en material de metal con variedad de lentes, ", " Redondo ", " PRADA ")
console.log(gafa1.publicar())
gafa1.insertar_inventario(gafa1)
module.exports = Producto;