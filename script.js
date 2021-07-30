function clr() {
    document.getElementById('result').value = "";
}
function display(val) {
    document.getElementById('result').value += val;
}
function evaluateResult() {
    let equation = document.getElementById('result').value;
    let y = eval(equation);
    document.getElementById('result').value = y;
}