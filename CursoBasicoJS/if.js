var edad = 17;

if (edad == 18) {
    console.log("Puedes votar, será tu 1era votacion");
}
else if (edad > 18) {
    console.log("Puedes votar de nuevo");
}
else {
    console.log("Aun no puedes votar");
}


var numero = 1;

var resultado = numero === 1 ? "Sí soy un 1" : "No, no soy 1"


// Juego del gato.
let piedra = "piedra"
let papel = "papel";
let tijera = "tijera";

function jugar(opcionJugador, opcionNpc) {
    if (opcionJugador == piedra && opcionNpc == papel) {
        console.log("El ganador es el robot");
    }
    else if (opcionJugador == piedra && opcionNpc == tijera) {
        console.log("Felicidades, haz ganado!");
    }
    else if (opcionJugador == papel && opcionNpc == piedra) {
        console.log("Felicidades, haz ganado!");
    }
    else if (opcionJugador == papel && opcionNpc == tijera) {
        console.log("El ganador es el robot");
    }
    else if (opcionJugador == tijera && opcionNpc == piedra) {
        console.log("El ganador es el robot");
    }
    else if (opcionJugador == tijera && opcionNpc == papel) {
        console.log("Felicidades, haz ganado!");
    }
    else {
        console.log("Haz empatado")
    }
}

jugar(piedra, papel);