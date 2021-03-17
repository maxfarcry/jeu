var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying, winningScore;

init();

document.getElementById('roll').addEventListener('click', function(){
  if (gamePlaying) {
    var diceRandom = Math.floor(Math.random() * 6) + 1;

   
    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice1').src = 'images/dice-' + diceRandom + '.png';

    
    if(diceRandom === 6 && prevDiceRoll === 6) {
      scores[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (diceRandom !== 1) {
      roundScore += diceRandom;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    prevDiceRoll = diceRandom;
  }
});

document.getElementById('hold').addEventListener('click', function () {

  if (gamePlaying) {
    
    scores[activePlayer] += roundScore;
 
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.getElementById('winningScore').value;
    var winningScore;

    if(input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {

      document.querySelector('#nom-' + activePlayer).textContent = 'Winner!';    

      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      gamePlaying = false;

    } else {
      nextPlayer();
    }
  }
});

document.getElementById('new-game').addEventListener('click', init);

function init() {
 
  gamePlaying = true;

  scores = [0, 0];

  activePlayer = 0;

  roundScore = 0;

 
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('nom-0').textContent = 'Joueur 1';
  document.getElementById('nom-1').textContent = 'Joueur 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

};

function nextPlayer() {

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');




};