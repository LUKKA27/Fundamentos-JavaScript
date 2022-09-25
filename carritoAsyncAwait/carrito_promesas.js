//crear clase carrito con atributo cantidad 

class Carrito {
    constructor(nombre, precio, cantidad){
        this._nombre=nombre
        this._precio=precio
        this._cantidad = cantidad
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
}

var carrito =[]
const p1 = new Carrito ("Azucar", 20000,4)
const p2 = new Carrito ("Arroz", 70000,5)
const p3 = new Carrito ("Sal", 10000,2)
const p4 = new Carrito ("Yuca", 5000, 7)
carrito.push(p1,p2,p3, p4)

function ingresarProductos(codigo, nombre, precio, cantidad) {
    carrito.push(codigo = new Carrito (nombre, precio, cantidad))
}

ingresarProductos("p5", "Jopo", 45000, 1)


console.log(carrito)



multi = []
var suma= 0;
for (let i = 0; i < carrito.length; i++) {
    total = carrito[i].precio * carrito[i].cantidad
    multi.push(total)
    suma += total
}
console.log("El total es: " + suma)


var plata = 400000
console.log("Su presupuesto es de: " + plata)
const presupuesto= new Promise((resolve, reject) => {
    if (suma<plata) {
        resolve("Le sobran: ")
    } else {
        reject("Su carrito exedió su presupuesto.")
    }
})

.then(value => {
    setTimeout(() => {
        for (let i = 0; i < carrito.length; i++) {
            var restante = plata - suma
        }
        console.log("Puede seguir añadiendo productos a su carrito y le quedan: " + restante)
    },1000);
return ;
})
.catch(value => {
    setTimeout(() => {
        console.log(value)
    }, 1000)
})

function eliminarProducto(codigo) {
    carrito.pop(codigo) 
}
eliminarProducto(3)

// console.log(carrito)