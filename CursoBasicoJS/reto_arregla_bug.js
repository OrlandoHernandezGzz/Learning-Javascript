/*
    export function solution(cars) {
        // 👇 Este es el código que no funciona
        var carsWithLicense = cars.filter(function (car) {
            return car.licensePlate != null;
        });

        return carsWithLicense;
    }

    En este desafío debes ayudarnos a arreglar la función solution.

    Esta recibe un array cars y debería retornar el array filtrado únicamente con los objetos que tengan la 
    propiedad licensePlate.

    Pero no está funcionando.

    La función solo devuelve un objeto con el primer elemento que cumple los requisitos, no estamos recibiendo 
    los demás elementos del array que también deberían pasar el filtro.

    ¿Nos ayudas? ¿Cómo solucionarías el error?
*/

function solution(cars) {

    var carsWithLicense = cars.filter(function(car){
      return car.licensePlate != null;
    });
    
    console.log(carsWithLicense);
  }
  
  const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
  solution(cars);