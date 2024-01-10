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

const playerOnePoints = document.querySelector('.playerOnePoints');
const playerTwoPoints = document.querySelector('.playerTwoPoints');