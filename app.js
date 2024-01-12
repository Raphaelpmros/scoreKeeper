const playerOnePoints = document.querySelector('#playerOnePoints');
const playerTwoPoints = document.querySelector('#playerTwoPoints');
const playerOneScore = document.querySelector('#scoreOne');
const playerTwoScore = document.querySelector('#scoreTwo');
const scoreLimitSelect = document.querySelector('#scoreLimit');
const customScoreInput = document.querySelector('#customScore');
const customInput = document.querySelector('#customInput');
const resetButton = document.querySelector('#reset');
const winner = document.querySelector('#winner');
const invalidNumber = document.querySelector('#invalidNumber');

customScoreInput.addEventListener('input', function() {
    if (parseInt(this.value) <= 0) {
        this.value = 1;
    }
});

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

playerOneScore.addEventListener('click', function () {
    if (canScore()) {
        players.player1.points++;
        updateScore();
    }
});

playerTwoScore.addEventListener('click', function () {
    if (canScore()) {
        players.player2.points++;
        updateScore();
    }
});

function canScore() {
    return players.player1.points < scoreLimit && players.player2.points < scoreLimit && customScore == null || players.player1.points < customScore && players.player2.points < customScore;
}

function updateScore() {
    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;
    scoreLimitSelect.disabled = true;
    customScoreInput.disabled = true;

    if (players.player1.points === scoreLimit || players.player2.points === scoreLimit || (customScore && (players.player1.points === customScore || players.player2.points === customScore))) {
        declareWinner();
        disableScoreButtons();
    }
}

function updateScoreLimit() {
    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;
}

function declareWinner() {
    if (players.player1.points === scoreLimit || customScore && (players.player1.points === customScore)) {
        winner.innerHTML = `<h4><b>Player one wins!</b></h4>`
        playerOneScore.style.backgroundColor = 'green';
        playerOnePoints.style.color = 'green';
        playerTwoScore.style.backgroundColor = 'red';
        playerTwoPoints.style.color = 'red';
        playerOneScore.disabled = true;
        playerTwoScore.disabled = true;
    } else {
        winner.innerHTML = `<h4><b>Player two wins!</b></h4>`
        playerOneScore.style.backgroundColor = 'red';
        playerOnePoints.style.color = 'red';
        playerTwoScore.style.backgroundColor = 'green';
        playerTwoPoints.style.color = 'green';
        playerOneScore.disabled = true;
        playerTwoScore.disabled = true;
    }
}

scoreLimitSelect.addEventListener('change', function () {
    scoreLimit = parseInt(this.value);
    customScore = null;
    if (scoreLimitSelect.value === 'custom') {
        customInput.style.display = 'block';
        customScoreInput.required = true;
        if (customScoreInput.value <= 0 && customInput.style.display === 'block') {
            alert('Por favor, digite um valor maior que zero para começar o jogo.');
            customScoreInput.value = ''
        }
    } else {
        customInput.style.display = 'none';
        customScore.required = false;
    }
    updateScoreLimit();
    enableScoreButtons();
});

customScoreInput.addEventListener('input', function () {
    customScore = parseInt(this.value);
    updateScoreLimit();
    enableScoreButtons();
});

resetButton.addEventListener('click', function () {
    players.player1.points = 0;
    players.player2.points = 0;

    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;

    playerOneScore.style.backgroundColor = '#2eb3a7';
    playerTwoScore.style.backgroundColor = '#2f169e';
    playerOnePoints.style.color = '';
    playerTwoPoints.style.color = '';

    playerOneScore.disabled = false;
    playerTwoScore.disabled = false;
    scoreLimitSelect.disabled = false;
    customScoreInput.disabled = false;

    winner.innerHTML = `<h4><b>Who will be the winner?</b></h4>`;
});