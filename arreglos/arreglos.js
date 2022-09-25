var vec=[];
//var vec2 = new Array();
console.log(vec);

vec[0] = 100;
console.log(vec); 

vec.push([1,2,3]);
console.log(vec);

//---

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector);


// EJERCICIO SUMA
var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i]
}
console.log(vc,sm);


//EJERCIO PROMEDIO 

var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i] 
    prom = sm/20
}
console.log(vc,sm,prom);


//EJERCICIO VALOR MAXIMO

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
mx=0; 
for (let i = 0; i < vector[i]; i++) {
    if (vector[i]>mx) {
        mx=vector[i]
    }
}
console.log(vector,mx)


//EJERCICIO MEDIANA 

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector)
for (let i = 0; i < vector.length; i++) {
    mdn=vector.length+1
    mediana= mdn/2
    posicion=vector[mediana]    
} if (mdn % 2 == 0) {
    console.log(vector,mediana,posicion)
} else {
    
}
console.log(vector,mediana,posicion)



