const inputBox = document.getElementById('input-box');
function appendValue(value) {
    inputBox.value += value;
}
function clearInput() {
    inputBox.value = '';
}
function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
}
function calculateResult() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = 'Error';
    }
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('clear')) {
            if (buttonText === 'AC') {
                clearInput();
            } else if (buttonText === 'DE') {
                deleteLast();
            }
        } else if (button.classList.contains('equal')) {
            calculateResult();
        } else {
            appendValue(buttonText);
        }
    });
});