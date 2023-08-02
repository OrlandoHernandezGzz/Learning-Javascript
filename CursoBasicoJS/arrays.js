var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length); // 4

console.log(frutas[0]); // Manzana

// Mutando el array

// Empujar un elemento al final de un array.
var masFrutas = frutas.push("Uvas");
console.log(frutas);


// Elimina el ultimo elemento que esta en el array.
var ultimo = frutas.pop();
console.log(frutas);


// Agrega un nuevo valor al principio del array.
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);


// Elimina el elemento que esta en el inicio.
var borrarFruta = frutas.shift();
console.log(frutas);


// Busca la posicion de un elemento.
var posicion = frutas.indexOf("Cereza");
console.log(`La posicion de cereza esta en: ${posicion}`)


/* 
    Detecta el Elemento Impostor de un Array
    vas a recibir un parámetro arraySecreto en la 
    función solution. Debes retornar true si el primer
    elemento del arraySecreto es de tipo string y debes 
    retornar false si es de cualquier otro tipo.
*/

function solution(arraySecreto){
    console.log(typeof arraySecreto[0] == "string")
}
  
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

