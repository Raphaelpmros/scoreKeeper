const playerOnePoints = document.querySelector('#playerOnePoints');
const playerTwoPoints = document.querySelector('#playerTwoPoints');
const playerOneScore = document.querySelector('#scoreOne');
const playerTwoScore = document.querySelector('#scoreTwo');
const scoreLimitSelect = document.getElementById('scoreLimit');
const customScoreInput = document.getElementById('customScore');
const customInput = document.getElementById('customInput');
const resetButton = document.querySelector('#reset');
const winner = document.querySelector('#winner');

function checkCustom() {
    const customInput = document.getElementById('customInput');
    const customScore = document.getElementById('customScore');
    if (scoreLimitSelect.value === 'custom') {
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

    if (players.player1.points === scoreLimit || players.player2.points === scoreLimit) {
        declareWinner();
        disableScoreButtons();
    } else if (customScore && (players.player1.points === customScore || players.player2.points === customScore)) {
        declareWinner();
        disableScoreButtons();
    }
}

function disableScoreButtons() {
    playerOneScore.disabled = true;
    playerTwoScore.disabled = true;
}

function enableScoreButtons() {
    playerOneScore.disabled = false;
    playerTwoScore.disabled = false;
}

function updateScoreLimit() {
    playerOnePoints.textContent = players.player1.points;
    playerTwoPoints.textContent = players.player2.points;
}

function declareWinner() {
    if (players.player1.points === scoreLimit) {
        winner.innerHTML = `<h4><b>Player one wins!</b></h4>`
    } else if (players.player2.points === scoreLimit) {
        winner.innerHTML = `<h4><b>Player two wins!</b></h4>`
    } else if (customScore && (players.player1.points === customScore)) {
        winner.innerHTML = `<h4><b>Player one wins!</b></h4>`
    } else if (customScore && (players.player2.points === customScore)) {
        winner.innerHTML = `<h4><b>Player two wins!</b></h4>`
    }
}

scoreLimitSelect.addEventListener('change', function () {
    scoreLimit = parseInt(this.value);
    customScore = null;
    checkCustom();
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

    enableScoreButtons();

    winner.innerHTML = `<h4><b>Who will be the winner?</b></h4>`;
});