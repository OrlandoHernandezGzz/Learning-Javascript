// Generando un objeto.
let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function() {
      console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto); // { marca: 'Toyota', modelo: 'Corolla', annio: 2022, detalleDelAuto: [Function: detalleDelAuto] }
console.log(miAuto.marca); // Toyota
console.log(miAuto.annio); // 2022
console.log(miAuto.detalleDelAuto()); // Auto Corolla 2022


// Función constructora
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2018);

console.log(autoNuevo2);
console.log(autoNuevo3);


// RETO.

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }
  
  let bandera = true
  let cars = [];
  
  while (bandera) {
    let marca = prompt("Digite la marca del carro: ");
    let modelo = prompt("Digite el modelo del carro: ");
    let annio = prompt("Digite el año del carro: ");
    
    cars.push(new auto(marca, modelo, annio));
    
    let finish = prompt("¿Deseas continuar agregando? \n1.Si \n2.No");
    
    if (finish == "No") {
      break;
    }
  }
  
  console.log(cars);




  // Otro reto.

  /*
    En este desafío vas a recibir un objeto car como parámetro de la función solution.
    Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la 
    propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original 
    con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original 
    con la propiedad drivingLicense como false.

    INPUT:

    // Prueba 1
    solution({
      color: 'red',
      brand: 'Kia',
    });

    // Prueba 2
    solution({
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    });

    // Prueba 3
    solution({ licensePlate: 'RGB255'  });


    OUTPUT:
    // Prueba 1
    {
      color: 'red',
      brand: 'Kia',
      drivingLicense: false,
    }

    // Prueba 2
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
      drivingLicense: true,
    }

    // Prueba 3
    {
      licensePlate: 'RGB255',
      drivingLicense: true,
    }
*/

function solution(car) {
  
  if (car.licensePlate != undefined) {
    car.drivingLicense = true;
  } else {
    car.drivingLicense = false;
  }
    return car;
}

console.log(solution({color: 'red', brand: 'Kia'}));

// Prueba 2:
console.log(solution({
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
}));

// Prueba 3
console.log(solution({ licensePlate: 'RGB255'  }));