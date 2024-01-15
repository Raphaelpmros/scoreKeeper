const playerOnePointsDisplay = document.querySelector('#playerOnePoints');
const playerTwoPointDisplay = document.querySelector('#playerTwoPoints');
const playerOneScore = document.querySelector('#scoreOne');
const playerTwoScore = document.querySelector('#scoreTwo');
const scoreLimitSelect = document.querySelector('#scoreLimit');
const customScoreInput = document.querySelector('#customScore');
const customInput = document.querySelector('#customInput');
const resetButton = document.querySelector('#reset');
const winner = document.querySelector('#winner');
const invalidNumber = document.querySelector('#invalidNumber');

customScoreInput.addEventListener('input', function () {
    if (parseInt(this.value) <= 0) {
        this.value = 1;
    }
});

const players = {
    one: {
        points: 0,
        name: 'Player 1'
    },
    two: {
        points: 0,
        name: 'Player 2'
    }
};

let scoreLimit = 11;
let customScore = null;

playerOneScore.addEventListener('click', function () {
    if (canScore()) {
        players.one.points++;
        updateScore();
    }
});

playerTwoScore.addEventListener('click', function () {
    if (canScore()) {
        players.two.points++;
        updateScore();
    }
});

function canScore() {
    return (
        (players.one.points < scoreLimit && players.two.points < scoreLimit && customScore == null) ||
        (players.one.points < customScore && players.two.points < customScore)
    );
}

function updateScore() {
    playerOnePointsDisplay.textContent = players.one.points;
    playerTwoPointDisplay.textContent = players.two.points;
    scoreLimitSelect.disabled = true;
    customScoreInput.disabled = true;

    if (
        (players.one.points === scoreLimit || players.two.points === scoreLimit) ||
        (customScore && players.one.points === customScore || players.two.points === customScore)
    ) {
        declareWinner();
        disableScoreButtons();
    }
}

function updateScoreLimit() {
    playerOnePointsDisplay.textContent = players.one.points;
    playerTwoPointDisplay.textContent = players.two.points;
}

function declareWinner() {
    if (
        (players.one.points === scoreLimit) ||
        (customScore && players.one.points === customScore)
    ) {
        winner.innerHTML = `<h4><b>Player one wins!</b></h4>`
        playerOneScore.style.backgroundColor = 'green';
        playerOnePointsDisplay.style.color = 'green';
        playerTwoScore.style.backgroundColor = 'red';
        playerTwoPointDisplay.style.color = 'red';
        playerOneScore.disabled = true;
        playerTwoScore.disabled = true;
        return;
    }
    winner.innerHTML = `<h4><b>Player two wins!</b></h4>`
    playerOneScore.style.backgroundColor = 'red';
    playerOnePointsDisplay.style.color = 'red';
    playerTwoScore.style.backgroundColor = 'green';
    playerTwoPointDisplay.style.color = 'green';
    playerOneScore.disabled = true;
    playerTwoScore.disabled = true;
}

scoreLimitSelect.addEventListener('change', function () {
    scoreLimit = parseInt(this.value);
    customScore = null;
    if (scoreLimitSelect.value === 'custom') {
        customInput.style.display = 'block';
        customScoreInput.required = true;
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
    players.one.points = 0;
    players.two.points = 0;

    playerOnePointsDisplay.textContent = players.one.points;
    playerTwoPointDisplay.textContent = players.two.points;

    playerOneScore.style.backgroundColor = '#2eb3a7';
    playerTwoScore.style.backgroundColor = '#2f169e';
    playerOnePointsDisplay.style.color = '';
    playerTwoPointDisplay.style.color = '';

    playerOneScore.disabled = false;
    playerTwoScore.disabled = false;
    scoreLimitSelect.disabled = false;
    customScoreInput.disabled = false;

    winner.innerHTML = `<h4><b>Who will be the winner?</b></h4>`;
});