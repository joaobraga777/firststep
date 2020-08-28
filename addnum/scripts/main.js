var numone = document.getElementsByClassName('one')[0];
var numtwo =document.getElementsByClassName('two')[0];
var numsum = document.getElementsByClassName('sum')[0];

numone.addEventListener('input',add);
numtwo.addEventListener('input',add);
function add() {
    var one = parseFloat(numone.value)||0;
    var two = parseFloat(numtwo.value)||0;
    numsum.innerHTML = 'the answer is '+(one+two);
}