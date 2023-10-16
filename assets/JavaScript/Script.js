document.getElementById('calculate').addEventListener('click', function(){
const value = parseFloat(document.getElementById('value').value);
const fee = parseFloat(document.getElementById('fee').value)/100;
const time = parseInt(document.getElementById('time').value);

const total = value * (1 + fee)**time;

document.getElementById('total').innerHTML = ("€" +   total.toFixed(2).replace('.', ','));
})
