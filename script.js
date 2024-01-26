const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const yourResult = document.querySelector(".your-result")
const machineResult = document.querySelector(".machine-result")

let humaScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

//Mostra jogada do jogador
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

//Mostra jogada da maquina
const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

//Função do jogo e pontuação
const playTheGame = (human, machine) => {
    console.log("Humano: " + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!😐"
    }
    else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        humaScoreNumber++
        humanScore.innerHTML = humaScoreNumber
        result.innerHTML = "Você ganhou!😁"
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!😢"
    }
    resultYour(human)
    resultMachine(machine)
}

//Mostra escolha do jogador
function resultYour (your) {
    if (your === GAME_OPTIONS.ROCK) {
        yourResult.innerHTML = '&#x1F44A;'
    }

    else if (your === GAME_OPTIONS.PAPER) {
        yourResult.innerHTML = '&#x1F590;'
    }

    else if (your === GAME_OPTIONS.SCISSORS) {
        yourResult.innerHTML = '&#x270C;'
    }
}

//Mostra escolha da maquina
function resultMachine (machine) {
    if (machine === GAME_OPTIONS.ROCK) {
        machineResult.innerHTML = '&#x1F44A;'
    }

    else if (machine === GAME_OPTIONS.PAPER) {
        machineResult.innerHTML = '&#x1F590;'
    }

    else if (machine === GAME_OPTIONS.SCISSORS) {
        machineResult.innerHTML = '&#x270C;'
    }
}

//Mostra reset do jogo
const reset = () => {
    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
    yourResult.innerHTML = ""
    machineResult.innerHTML = ""
    result.innerHTML = "Bora jogar!"
}
