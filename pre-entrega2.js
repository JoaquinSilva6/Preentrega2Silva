//   Super piedra papel o tijeras  //
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.rachaVictorias = 0  //en el juego cada 3 victorias consecutivas 
    }
}

function juego(jugador, opcionJugador) {
    let opcionPC = opciones[Math.floor(Math.random() * 3)]

    if (jugador.rachaVictorias < 3 && opcionJugador == opcionPC) {
        alert("Empate")
    }
    else if ((opcionJugador == "piedra" && opcionPC == "tijera") || (opcionJugador == "papel" && opcionPC == "piedra") || (opcionJugador == "tijera" && opcionPC == "papel") || (jugador.rachaVictorias % 3 == 0 && opcionJugador == opcionPC)) {
        alert(`La computadora eligió ${opcionPC}, ganaste!!`)
        jugador.victorias++
        jugador.rachaVictorias++
    }
    else {
        alert(`La computadora eligió ${opcionPC}, perdiste`)
        jugador.derrotas++
        jugador.rachaVictorias = 0
    }

}

const opciones = ["piedra", "papel", "tijera"]
//creamos el usuario para el juego
let usuario = prompt("Ingrese nombre de usuario: ")
let jugador = new Jugador(usuario)

while (true) {
    let opcionMenu = Number(prompt(
        `-----Menu-----
        1-Jugar
        2-Mostrar info del usuario
        3-Reglas del juego`
    ))

    switch (opcionMenu) {
        case 1:
            for (let i = 0; i < 3; i++) {
                let opcionUsuario = opciones[Number(prompt("Ingrese el número de la opción: 0-Piedra  1-Papel  2-Tijera"))]
                juego(jugador, opcionUsuario)
            }
            break
        case 2:
            alert(`----Informacion del usuario (${jugador.nombre})----
                Partidas ganadas: ${jugador.victorias}
                Partidas perdidas: ${jugador.derrotas}
                Racha de victorias: ${jugador.rachaVictorias}`)
                break
        case 3:
            alert(`----Super piedra, papel o tijera----
                Funciona como el clasico juego de piedra, papel o tijeras en el que gana el mejor de 3 rondas, pero con la particularidad de que cada 3 victorias consecutivas el jugador gana una opción "super" que le permite ganar los empates`)
                break
        default:
            alert("Debe elegir una opción valida (1, 2 o 3)")
            break
    }

    if (confirm("Quiere volver al menu?")) { }
    else {
        break
    }
}