const Producto = require('./producto.js')
class Pedido extends Producto {
    constructor(Nomempresa, sku, nombre, CantProducto, ValorP) {
        super(sku, nombre)
        this._Nomempresa = Nomempresa
        this._CantProducto = CantProducto
        this._valorP = ValorP
    }
    set Nomempresa(Nomempresa) {
        this._Nomempresa = Nomempresa;
    }
    set CantProducto(CantProducto) {
        this._CantProducto = CantProducto;
    }
    set ValorP(ValorP) {
        this._valorP = ValorP;
    }

    get Nomempresa() {
        this._Nomempresa = Nomempresa;
    }
    get CantProducto() {
        this._CantProducto = CantProducto;
    }
    get ValorP() {
        this._valorP = ValorP;
    }

}
var pedidio1 = new pedidio("Prada S.A.S", 65483, "Gafas prada", 20, );
module.exports = Inventario;
// push pedido a inventario