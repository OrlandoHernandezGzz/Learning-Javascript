console.log(miNombre); // undefined.
var miNombre = "Orlando";

// El proceso de anterior hace lo siguiente.

// Crea en memoria la variable.
// Luego retorna undefined ya que 
// no tiene valor asignado.
var miNombre = undefined;
console.log(miNombre);



hey();

function hey() {
    console.log("Hola ", miNombre);
}

var miNombre = "Orlando";