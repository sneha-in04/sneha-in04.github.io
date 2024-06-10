let recentCalculations = [];

function appendToDisplay(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function calculateResult() {
    let display = document.calc.display.value;
    try {
        let result = eval(display);
        document.calc.display.value = result;
        addRecentCalculation(display + " = " + result);
    } catch (e) {
        document.calc.display.value = 'Error';
    }
}

function toggleSign() {
    let display = document.calc.display.value;
    if (display.startsWith('-')) {
        document.calc.display.value = display.substring(1);
    } else {
        document.calc.display.value = '-' + display;
    }
}
function addRecentCalculation(calculation) {
    if (recentCalculations.length >= 5) {
        recentCalculations.shift(); // Remove the oldest calculation
    }
    recentCalculations.push(calculation);
    displayRecentCalculations();
}

function displayRecentCalculations() {
    let recentCalcContainer = document.getElementById('recent-calculations');
    recentCalcContainer.innerHTML = recentCalculations.map(calc => `<li>${calc}</li>`).join('');
}
