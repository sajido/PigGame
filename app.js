/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score1, score2, currentScore, activePlayer;

function initializeGame() {
    score0 = 0;
    score1 = 0;
    currentScore = 0;
    activePlayer = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    //document.querySelector('.dice').style.display = 'none';
}

initializeGame();

function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    var diceValue = randomDice();
    document.getElementsByClassName('dice')[0].src = 'dice-' + diceValue + '.png';
    if (diceValue !== 1){
        currentScore += diceValue;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
    } else {
        var withOne = true;
        changePlayer(withOne);
    }
    
}

function changePlayer(withOne) {
    if (activePlayer === 0){
        activePlayer = 1;
        document.getElementsByClassName('player-0-panel active')[0].className = 'player-0-panel';
        document.getElementsByClassName('player-1-panel')[0].className = 'player-1-panel active';
        if (!withOne) score0 += currentScore;
        document.querySelector('#score-0').textContent = score0;
        document.querySelector('#current-0').textContent = 0;
        currentScore = 0;
    }else {
        activePlayer = 0;
        document.getElementsByClassName('player-1-panel active')[0].className = 'player-1-panel';
        document.getElementsByClassName('player-0-panel')[0].className = 'player-0-panel active';
        if (!withOne) score1 += currentScore;
        document.querySelector('#score-1').textContent = score1;
        document.querySelector('#current-1').textContent = 0;
        currentScore = 0;
    }
}

function hold(){
    changePlayer(false);
    
    if(score0 >= 100) {
            alert('Player 1 won');
            initializeGame();
        }
    if(score1 >= 100) {
            alert('Player 2 won');
            initializeGame();
        }
    
    
    
    currentScore = 0;
}