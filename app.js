function checkCustom(select) {
    const customInput = document.getElementById('customInput');
    const customScore = document.getElementById('customScore');
    if (select.value === 'custom') {
        customInput.style.display = 'block';
        customScore.required = true;
    } else {
        customInput.style.display = 'none';
        customScore.required = false;
    }
}

const players = {
    player1: {
      points: 0,
      name: 'Player 1'
    },
    player2: {
      points: 0,
      name: 'Player 2'
    }
  };
  
  let scoreLimit = 11;
  let customScore = null;

  const playerOneScore = document.querySelector('#scoreOne');
  playerOneScore.addEventListener('click', function() {
    players.player1.points++;
    updateScore();
  });
  
  const playerTwoScore = document.querySelector('#scoreTwo');
  playerTwoScore.addEventListener('click', function() {
    players.player2.points++;
    updateScore();
  });
  
  const playerOnePoints = document.querySelector('.playerOnePoints');
  const playerTwoPoints = document.querySelector('.playerTwoPoints')

  function updateScore() {
    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;
  
    if (players.player1.points === scoreLimit || players.player2.points === scoreLimit) {
      declareWinner();
    }
  }

  function updateScoreLimit() {
    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;
  }
  
  function declareWinner() {
    if (players.player1.points === scoreLimit) {
      alert(`Player one wins!`);
    } else if (players.player2.points === scoreLimit) {
      alert(`Player two wins!`);
    }
  }

  const scoreLimitSelect = document.getElementById('scoreLimit');

scoreLimitSelect.addEventListener('change', function() {
  scoreLimit = parseInt(this.value);
  customScore = null;
  updateScoreLimit();
});

const customScoreInput = document.getElementById('customScore');
const customInput = document.getElementById('customInput');

customScoreInput.addEventListener('input', function() {
  customScore = parseInt(this.value);
  updateScoreLimit();
});

function checkCustom(select) {
  if (select.value === 'custom') {
    customInput.style.display = 'block';
  } else {
    customInput.style.display = 'none';
  }
}

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function() {
    players.player1.points = 0;
    players.player2.points = 0;
})