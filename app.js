numberArray = []
answerArray = []
var numberTimer;

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
    if (numberArray.length < 3) {
        return;
    } else {
        clearInterval(numberTimer);
    }
}

function bigIfTrue() {
    var text = document.getElementById("rightWrongDisplay").innerHTML
    if (answerArray.length == 3) {
        

        if (answerArray == numberArray) {
            console.log("Nice");
        } else {
            console.log("nah");
        }
        
    }
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


