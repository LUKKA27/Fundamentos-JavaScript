class venta extends producto {
    constructor(sku,nombre,precio,descripcion,referencia,lente,mrc,imgen,vlor_comp,nroventa,fecha,valor_venta) {
        super(sku,nombre,precio,descripcion,referencia,lente,mrc,imgen,vlor_comp);
        this._nroventa=nroventa;
        this._fecha=fecha;
        this._valor_venta=valor_venta;
    }
    set nroventa(nroventa) {
        this._nroventa=nroventa;
    }
    set fecha(fecha) {
        this._fecha=fecha;
    }
    set valor_venta(valor_venta) {
        this._valor_venta=valor_venta;
    }
    get nroventa() {
        return this._nroventa;
    }
    get fecha() {
        return this._fecha;
    }
    get valor_venta() {
        return this._valor_venta;
    }
    //metodos
    consultar() {
        return `El producto fue vendido en la fecha ${this.fecha}, su número de venta es ${this.nroventa}
        y el valor de la venta es ${this.valor_venta} `
    }

    devolucion() {
        return `El producto ${this.nombre} con un valor de ${this.valor_venta} fue devuelto en la fecha ${this.fecha}`
    }
    facturacion() {
        return `${this.fecha}........${this.nroventa}
    ${this.nombre}....................${this.valor_venta}`
    }

}