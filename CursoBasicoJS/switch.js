var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy un uno");
        break;

    case 10:
        console.log("Soy un 10");
        break;

    case 100:
        console.log("Soy un 100");
        break;

    default:
        console.log("No soy nada");
        break;
}



// Juego del gato.
let piedra = "piedra"
let papel = "papel";
let tijera = "tijera";

function jugar(opcionJugador, opcionNpc) {

    switch (true) {
        case (opcionJugador == piedra && opcionNpc == papel):
            console.log("El ganador es el robot");
            break;
        case (opcionJugador == piedra && opcionNpc == tijera):
            console.log("Felicidades, haz ganado!");
            break;
        case (opcionJugador == papel && opcionNpc == piedra):
            console.log("Felicidades, haz ganado!");
            break;
        case (opcionJugador == papel && opcionNpc == tijera):
            console.log("El ganador es el robot");
            break;
        case (opcionJugador == tijera && opcionNpc == piedra):
            console.log("El ganador es el robot");
            break;
        case (opcionJugador == tijera && opcionNpc == papel):
            console.log("Felicidades, haz ganado!");
            break;
        default:
            console.log("Haz empatado")
            break;
    }
}

jugar(tijera, papel);



// Playground: tienda de tecnología.

function solution(article) {
    // Tu código aquí 👈
    switch (article) {
        case 'computadora':
        return `Con mi ${article} puedo programar usando JavaScript`

        case 'celular':
        return `En mi ${article} puedo aprender usando la app de Platzi`

        case 'cable':
        return `¡Hay un ${article} en mi bota!`

        default:
        return `Artículo no encontrado`
    }
}

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')