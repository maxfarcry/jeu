var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying;

init();

document.getElementById('roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var dice3 = Math.floor(Math.random() * 6) + 1;
    var dice4 = Math.floor(Math.random() * 6) + 1;
    var dice5 = Math.floor(Math.random() * 6) + 1;
    var dice6 = Math.floor(Math.random() * 6) + 1;
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice3').style.display = 'block';
    document.getElementById('dice4').style.display = 'block';
    document.getElementById('dice5').style.display = 'block';
    document.getElementById('dice6').style.display = 'block';
    document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    document.getElementById('dice3').src = 'dice-' + dice3 + '.png';
    document.getElementById('dice4').src = 'dice-' + dice4 + '.png';
    document.getElementById('dice5').src = 'dice-' + dice5 + '.png';
    document.getElementById('dice6').src = 'dice-' + dice6 + '.png';
    if(dice1 === 6 && prevDiceRoll === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#Score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !==1 && dice3 !==1 && dice4 !==1 && dice5 !==1 && dice6 !==1) {
      roundScore += dice1 + dice2 + dice3 + dice4 + dice5 + dice6;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    prevDiceRoll = dice1;
  }
});
/*

document.querySelector('.btn-hold').addEventListener('click', function () {

  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.getElementById('winningScore').value;
    var winningScore;

    if(input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores [activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Gagnant !';
      document.getElementById('dice1').style.display = 'none';
      document.getElementById('dice2').style.display = 'none';
      document.getElementById('dice3').style.display = 'none';
      document.getElementById('dice4').style.display = 'none';
      document.getElementById('dice5').style.display = 'none';
      document.getElementById('dice6').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
  document.getElementById('dice3').style.display = 'none';
  document.getElementById('dice4').style.display = 'none';
  document.getElementById('dice5').style.display = 'none';
  document.getElementById('dice6').style.display = 'none';

  document.getElementById('score-1').textContent = 'Joueur 1';
  document.getElementById('score-2').textContent = 'Joueur 2';
  document.getElementById('currrent-1').textContent = '0';
  document.getElementById('currrent-2').textContent = '0';

  document.getElementById('name-1').textContent = 'Joueur 1';
  document.getElementById('name-2').textContent = 'Joueur 2';
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-2-panel').classList.remove('winner');

  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-2-panel').classList.remove('active');

  document.querySelector('.player-2-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.add('active');  
}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-1').textContent = '0';
  document.getElementById('current-2').textContent = '0';

  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.player-2-panel').classList.toggle('active');

  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
  document.getElementById('dice3').style.display = 'none';
  document.getElementById('dice4').style.display = 'none';
  document.getElementById('dice5').style.display = 'none';
  document.getElementById('dice6').style.display = 'none';

}
*/