numberArray = []
answerArray = []
var numberTimer;
var numberlistlength = 3;


function increaseLength() {
    numberlistlength ++
}

function numberTimerFunction() {
    numberTimer = setInterval(randomNumber, 1000);
}

function randomNumber() {
    // generates random number, displays it, then pushes it to array
    var currentNumber = Math.floor((Math.random() * 9))
    document.getElementById("numberDisplay").innerHTML = currentNumber;
    numberArray.push(currentNumber)
    returnLoop(); 
    console.log(numberArray)
}


function returnLoop () {
    var text = document.getElementById("rightWrongDisplay");
    text.innerHTML = " "
    if (numberArray.length < numberlistlength) { // length determiner
        return;
    } else {
        clearInterval(numberTimer);
    }
}

function arrayCheck(array1, array2) {
    for (i=0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            continue
        } else {
            return false;
        }
    } 
    return true;
} 

// changes html element to 'correct' or 'incorrect'
function bigIfTrue() {
    var text = document.getElementById("rightWrongDisplay");
    if (answerArray.length === numberlistlength) {
        if (arrayCheck(numberArray, answerArray)) {
            text.innerHTML = "Correct!"
            lengthCount();
            increaseLength();
            console.log(numberlistlength);
            numberArray = [];
            answerArray = [];
        } else {
            text.innerHTML = "Incorrect. The order was: " + JSON.stringify(numberArray)
        }
  
    } 
}

// displays length of number string
function lengthCount() {
    var text = document.getElementById("lengthCount");
    text.innerHTML = "Length: " + JSON.stringify(numberlistlength);
}

// input check!
function inputCheck() {
    var x, text;
    x = parseInt(document.getElementById("answer").value);

    answerArray.push(x);
    console.log(answerArray);
}

// auto submit & clear input 
var text = document.getElementById("answer");
var answerButton = document.getElementById("answerButton");
var clearButton = document.getElementById("clearButton");
text.onkeyup = function() {
    if (text.value.length == 1) {
        answerButton.click();
        clearButton.click();
        bigIfTrue();
  }
}


