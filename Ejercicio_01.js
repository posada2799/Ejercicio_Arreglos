let nombre = prompt('Cual es tu nombre?');//aqui pido datos por consola al usuario
console.log(nombre);

let saldoUsuario;
console.log(saldoUsuario);

const productos = [ //aqui estoy creando una lista en JS
    {//aqui voy a crear los objetos que pueden ser persona con atributo hijos,edad, etc
        id:1,
        nombre:'Play 4',
        valor:800000,
        porcentajeImpuesto:5,
    },

    {
        id:2,
        nombre:'PSP 3000',
        valor:300000,

        porcentajeImpuesto:2

    },

    {
        id:3,
        nombre:'Play 5',
        valor:1500000,
        porcentajeImpuesto:5
    }



]
console.log(productos);

 saldoUsuario = Number(prompt('Ingrese su saldo inicial'));//aqui estoy convirtiendo el numero que ingresa el suario de string a numero

 let comprar = prompt('Que deseas comprar');
 console.log(comprar);

 //vamos hacer un recorrido a la ray para ver que eligio el usuario usamos find para que busque lo que el usuario eligio
 let productoElegido = productos.find(
  p => p.nombre.toLowerCase() === comprar.toLowerCase()
);