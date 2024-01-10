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

  document.getElementById('scoreOne').addEventListener('click', function() {
    players.player1.points++;
    updateScore();
  });
  
  document.getElementById('scoreTwo').addEventListener('click', function() {
    players.player2.points++;
    updateScore();
  });
  
  function updateScore() {
    document.querySelector('.playerOnePoints').textContent = players.player1.points;
    document.querySelector('.playerTwoPoints').textContent = players.player2.points;
  
    if (players.player1.points === scoreLimit || players.player2.points === scoreLimit) {
      declareWinner();
    }
  }
  
  function declareWinner() {
    if (players.player1.points === scoreLimit) {
      alert(`${players.player1.name} wins!`);
    } else if (players.player2.points === scoreLimit) {
      alert(`${players.player2.name} wins!`);
    }
  }

  const scoreLimitSelect = document.getElementById('scoreLimit');

scoreLimitSelect.addEventListener('change', function() {
  scoreLimit = parseInt(this.value);
  customScore = null;
  updateScoreLimit();
});

function updateScoreLimit() {
  document.querySelector('.playerOnePoints').textContent = players.player1.points;
  document.querySelector('.playerTwoPoints').textContent = players.player2.points;
}

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