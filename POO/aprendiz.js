class aprendiz {
	constructor (nombre,documento,competencias,formacion) {
		this.nombre=nombre;
		this.documento=documento
		this.competencias=competencias
		this.formacion=formacion
		this.info= `Su nombre es ${this.nombre}, su No de documento es ${this.documento},sus competencias son ${this.competencias}, y su programa y ficha son ${this.formacion}`;
	}
}

const estudiante1= new aprendiz("Maria",12345, ["diseño", "análisis", "desarrollo","ética"],["Programacion de software","ficha:2453232"] )
console.log(estudiante1.info)

const estudiante2= new aprendiz("Andrew",26236, ["diseño", "análisis", "desarrollo","ética"],["Programacion de software","ficha:2453232"] )
console.log(estudiante2.info)
