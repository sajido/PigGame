/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer, gamePlaying;

function initializeGame() {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying= true;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    //document.querySelector('.dice').style.display = 'none';
}

initializeGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        if(dice !== 1){
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            currentScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = currentScore;

        }else {
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            changePlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += currentScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100){
            currentScore = 0;
            document.querySelector('#current-0').textContent = 0;
            document.querySelector('#current-1').textContent = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            gamePlaying = false;
        }else{
            changePlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', initializeGame);

function changePlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}
