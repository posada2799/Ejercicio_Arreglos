// let nombre = prompt('Cual es tu nombre?');//aqui pido datos por consola al usuario

let saldoUsuario;
let productoSeleccionado;
console.log(saldoUsuario);

const productos = [ //aqui estoy creando una lista en JS
    {//aqui voy a crear los objetos que pueden ser persona con atributo hijos,edad, etc
        id:1,
        nombre:'play 4',
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

 saldoUsuario = Number(prompt('Ingrese su saldo inicial'));//aqui estoy convirtiendo el numero que ingresa el suario de string a numero
 let idProducto = Number(prompt(`
    id: ${productos[0].id} ${productos[0].nombre} -> ${productos[0].valor}
    Que deseas comprar, digite el id
    `));
//  coo acceder a los elementos de un arreglo

// console.log(productos[0]);

// console.log(`hola como estas como vas todo bien ${comprar} ${productos[0].nombre} `);

//  console.log(comprar);

for (let index = 0; index < productos.length; index++) {
    // 1 vuelta index = 0
    // TAREAAAAA
    // diferencia entre 3 ifguales y 2
    if (idProducto === productos[index].id) {
        productoSeleccionado = productos[index]
    }
}

console.log(productoSeleccionado);

// CALCULAR EL IMPUESTO
// RESTARLE EL VALOR TOTAL AL SALDO INICIAL
// IMPRIMIR EN CONSOLA GRACIAS PÓR LA COMPRA ESTE ES EL VALOR DEL PRODUCTO 
// Y ESTE ES SU SALDO FINAL
// USANDO TEMPLATE STRINGS



 //vamos hacer un recorrido a la ray para ver que eligio el usuario usamos find para que busque lo que el usuario eligio
//  let productoElegido = productos.find(
//   p => p.nombre.toLowerCase() === comprar.toLowerCase()
// );