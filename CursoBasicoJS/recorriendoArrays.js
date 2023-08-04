let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];


/* 
    .find: Genera un nuevo array con el valor que le estamos pasando y valida 
    si el articulo existe lo va a regresar, sino no lo regresa
*/
let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo); // { nombre: 'Laptop', costo: 20000 }

/* 
    .forEach: Va a recorer todos los elementos del arreglo.
*/
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});


/*
    .some: Nos va a regresar una validacion de verdadero y falso,
    nos dice si al menos en la lista hay un item que cumple con
    esa validación.
*/
let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});