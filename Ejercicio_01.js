// let nombre = prompt('Cual es tu nombre?');//aqui pido datos por consola al usuario

let saldoUsuario;
console.log(saldoUsuario);
const iva = 0.21; 

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

    
        porcentajeImpuesto:2,

    },

    {
        id:3,
        nombre:'Play 5',
        valor:1500000,

        porcentajeImpuesto:5,
    }

]
saldoUsuario = Number(prompt('Ingrese su saldo inicial'));//aqui estoy convirtiendo el numero que ingresa el suario de string a numero
//creamos una variable para que el usuario vea el texto de la lista
let listaParamostrar = "-----Productos Disponibles-----";//siempre debemos crear una variable para que for recorra

//Usamos el ciclo FOR para recorrer el arreglo y "armar" la lista
for (let i = 0; i < productos.length; i++){
    listaParamostrar = listaParamostrar + ` ID: ${productos[i].id} - ${productos[i].nombre} -> $${productos[i].valor}`;
}

//Fuera del for, pedimos el ID al usuario usando la lista que armamos
let productoSeleccionado = Number(prompt(listaParamostrar + "  Digite el ID del producto: "));
let productoEncontrado = productos [productoSeleccionado - 1];//esta linea la la auorelleno VSCode
console.log("Seleccionaste el ID: " + productoEncontrado.nombre);


let valorDelImpuesto = (productoEncontrado.valor * productoEncontrado.porcentajeImpuesto)/100;
console.log("El valor del impuesto es: $" + valorDelImpuesto);

//desde esta linea VSC ode me la autolleno
let valorTotal = productoEncontrado.valor + valorDelImpuesto;
console.log("El valor total del producto es: $" + valorTotal);
//no se como imprimir el valor del impuesto


// CALCULAR EL IMPUESTO
// RESTARLE EL VALOR TOTAL AL SALDO INICIAL
// IMPRIMIR EN CONSOLA GRACIAS PÓR LA COMPRA ESTE ES EL VALOR DEL PRODUCTO 
// Y ESTE ES SU SALDO FINAL
// USANDO TEMPLATE STRINGS



 //vamos hacer un recorrido a la ray para ver que eligio el usuario usamos find para que busque lo que el usuario eligio
//  let productoElegido = productos.find(
//   p => p.nombre.toLowerCase() === comprar.toLowerCase()
// );