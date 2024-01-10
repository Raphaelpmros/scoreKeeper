function checkCustom(select) {
    const customInput = document.getElementById('customInput');
    const customScore = document.getElementById('customScore');
    if (select.value === 'custom') {
        customInput.style.display = 'block';
        customScore.required = true; // Marque como obrigatório se desejar
    } else {
        customInput.style.display = 'none';
        customScore.required = false;
    }
}