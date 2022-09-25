//Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
//valor del medio es 11. No use operadores lógicos
let num1=10
let num2=4
let num3=7

if (num2>num1) {
	console.log("Este no es el numero del medio")
} else if (num3>num2) {
	console.log("Como num3 es mayor que num2 y menor que num1 el numero de en medio es ",(num3))
};

// n un juego de preguntas a las que se responde “Si” o “No” gana quien 
//responda correctamente las tres preguntas. Si se responde mal a cualquiera de 
//ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
//1. Colon descubrió América?
//2. La independencia de Colombia fue en el año 1810?
//3. The Doors fue un grupo de rock Americano?

let respuesta="No"

if (respuesta=="Si"){
	console.log("Nos han respondido si")
} else if (respuesta=="No"){
	console.log("Nos han respondido no")
} else {
	console.log("No hemos entendido la respuesta")
}
