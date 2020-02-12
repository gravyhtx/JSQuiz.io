// JavaScript: The Quiz //


// VARIABLES //
// function gameStart() {
var gameOn = false
if (gameOn == false) {
    document.getElementById("qNumber").innerHTML = "YOU'RE THE BEST AROUND!";
    document.getElementById("qQuestion").innerHTML = "HIGH SCORES";
    document.getElementById("generate").innerHTML = "WANT TO PLAY A GAME?";
}
else {
    document.getElementById("qNumber").innerHTML = "YOU'RE THE BEST AROUND!";
    document.getElementById("qQuestion").innerHTML = "HIGH SCORES";
    document.getElementById("generate").innerHTML = "WANT TO PLAY A GAME?";
}
// }

var scoreOn = false
var timer = 1000

console.log(gameOn, scoreOn)


var answerIs = ['', 'CORRECT', 'NOPE'];
var page = ['home', 'q1', 'q2', 'q3', 'q4', 'q5',];

var timerOn = false;

var username;`  `

var screenIs = false;




// FUNCTIONS //

$("#generate").on("click", function() {
    console.log("I've been clicked!");
    document.getElementById("generate").innerHTML = "SUBMIT";
    document.getElementById("qNumber").innerHTML = "Please enter your username...";
    document.getElementById("qQuestion").innerHTML = "MAX 8 CHARACTERS";
    // var screenIs = true;

    // var screenHTML = 
    // document.getElementById("screen") = tammy;
    // function tammy() {

    // }
    // if (screenIs === true)
    //     screenIs.

    // document.getElementById("screen").innerHTML {
    //     <textarea
    //         id="scoreBoard"
    //         placeholder="username"
    //         aria-label="HIGH SCORES"
    //       ></textarea>
    // }
    var response;
    if (userEntry.length == 0){
        response = "Ouch!";
        var gameOn = false;
    } else if (userEntry.length <= 8){
        response = "Let's do this!";
        var gameOn = true;
    } else if (userEntry.length > 8) {
        response = "Why did you do that?";
        var gameOn = false;
    }
    alert(response);
    console.log("gameOn " + gameOn);
    console.log("userEntry " + userEntry);
  });



/*

HOME
- Set text in card2
- Set timer to 1000 (or 100 per question)
- Wait for click
- Store username

GAME ON
- Start timer
    25 time loss per second
    correct answer gains defined time, 100 + different number per question for more randomized score
    wrong answer lose 20 time
    time = score
- Questions, change text  >>  document.getElementById(id).innerHTML = NEW TEXT  <<
    id = qNumber to question number
    id = qQuestion to the question
    id = screen to answers, clickable
    Clear card-footer / "btn" (#generate) and show "CORRECT" or "NOPE"
        choose from answerIs.items[0-2]
- Game ends when:  timer <= 0  or  all questions answered

GAME OFF
- Score is final time
- Alert score
- Add username and score to scoreBoard in order of score
- Set timer, wait for click...

*/

/*

FUNCTIONS

function scoreBoard (username, score) {
    idk
}

*/