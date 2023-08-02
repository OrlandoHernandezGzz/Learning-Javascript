var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++ ) {
  saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

/* 
En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

*/


function solution(estudiantes, deathCount, nuevo) {
    /*if (deathCount === 0) {
        estudiantes.push(nuevo);
        return estudiantes;
      }
    
    if (deathCount > 0) {
      var contador = 0;
      while (contador < deathCount) {
        estudiantes.pop();
        contador++;
      }
      estudiantes.push(nuevo)
      return estudiantes;
    }*/

    
    // Otra solución que considero es la más factible.
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    
    estudiantes.push(nuevo);
    return estudiantes;
  }
  
  console.log(solution(["Nico", "Zule"], 0, "Santi"));
  
  console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"));
  
  console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami")
  );





