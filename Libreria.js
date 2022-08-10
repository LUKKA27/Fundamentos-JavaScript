class Publicacion {
    constructor(titulo,precio) {
        this._titulo=titulo;
        this._precio=precio;
    }
    set titulo(titulo) {
        this._titulo=titulo;
    }
    set precio(precio) {
        this._precio=precio;
    }
    get titulo() {
        return this._titulo;
    }
    get precio() {
        return this._precio;
    }
    datosCompletos(){
        return `El titulo de la obra es ${this.titulo} y su precio es ${this.precio}`
    }
}
const publi=new Publicacion("Los Endemoniados",45000)
console.log(publi)
console.log(publi.datosCompletos())

class Libro extends Publicacion{
    constructor(titulo,precio,pag) {
        super(titulo,precio);
        this._pag=pag;
    }
    set pag(pag) {
        this._pag=pag;
    }
    get pag() {
        return this._pag;
    }
    datosCompletos(){
        return `El titulo de la obra es ${this.titulo}, su precio es ${this.precio} y el número total de paginas a leer son ${this.pag}pag `
    }
}
const publi1=new Libro("Los Hermanos Karamazov",55000,400)
console.log(publi1)
console.log(publi1.datosCompletos())

class Disco extends Publicacion{
    constructor(titulo,precio,audio) {
        super(titulo,precio,)
        this._audio=audio;
    }
    set audio(audio) {
        this._audio=audio;
    }
    get audio() {
        return this._audio;
    }
    datosCompletos(){
        return `El titulo de la obra es ${this.titulo}, su precio es ${this.precio} y su duracion es de ${this.audio}min `
    }

}
const publi2=new Disco("Crimen y Castigo",70000,500)
console.log(publi2)
console.log(publi2.datosCompletos())
