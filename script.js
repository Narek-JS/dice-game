const dice = document.querySelector(".dice")
const rollDice = document.querySelector(".btn--roll")
const current0 = document.querySelector("#current--0")
const current1 = document.querySelector("#current--1")
const hold = document.querySelector(".btn--hold")
const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const player0Div = document.querySelector(".player--0")
const player1Div = document.querySelector(".player--1")
const startNewGame = document.querySelector('.btn--new')

let player = 'player1'

const data = {
    player1: 0,
    player2: 0,
    player1AllPoints: 0,
    player2AllPoints: 0,
}

let dices = {
    1 : "dice-1.png",
    2 : "dice-2.png",
    3 : "dice-3.png",
    4 : "dice-4.png",
    5 : "dice-5.png",
    6 : "dice-6.png",
}

const changePlayer = () =>  player = player === 'player1' ? 'player2' : 'player1';

const changeColor = () => {  
    if(player0Div.classList.value.indexOf('player--active') !== -1) {
        player1Div.classList.value = player1Div.classList.value +' player--active';
        player0Div.classList.remove("player--active");
        return
    }
    player1Div.classList.remove("player--active");
    player0Div.classList.value = player0Div.classList.value +' player--active';
}

const nextPlayer = () => {
    if(player === 'player1'){
        data[player] = 0
        current0.innerHTML = 0
        player = 'player2'
        changeColor()
        return 
    }
    data[player] = 0
    current1.innerHTML = 0;
    player = 'player1'
    changeColor()
}

const choosePlayer = (player) => {
    const index = Math.floor(Math.random() * 6 + 1);
    dice.src = dices[index]

    if(player === 'player1' && index !== 1){
        data[player] += index
        current0.innerHTML = data[player]
        return
    }else if(player === 'player2' && index !== 1){
        data[player] += index
        current1.innerHTML = data[player]
        return
    }
    nextPlayer()
}

rollDice.addEventListener("click", () => choosePlayer(player) );

hold.addEventListener("click", () => { 
    data[player + 'AllPoints'] += data[player]
    data[player] = 0;

    if(player === 'player1'){
        current0.innerHTML = data[player]
        score0.innerHTML = data[player + 'AllPoints']
    }else{
        current1.innerHTML = data[player]
        score1.innerHTML = data[player + 'AllPoints']
    }
    changeColor()
    changePlayer()
});

startNewGame.addEventListener('click', () => {
    if(player === 'player2') changeColor()

    player = 'player1';
    dice.src = dices[1];
    data.player1 = 0;
    data.player2 = 0;
    data.player1AllPoints = 0;
    data.player2AllPoints = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    score0.innerHTML = 0;
    score1.innerHTML = 0;
})

