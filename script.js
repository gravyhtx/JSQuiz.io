/*
Display High Scores, JavaScript: The Quiz
Click Button to start Quiz

*/

var gameOn = false
var scoreOn = false

console.log(gameOn, scoreOn)


var answerIs = {
    items: ['', 'CORRECT', 'NOPE'],
}

var timerOn = false;

var username


// FUNCTIONS //

$("#generate").on("click", function() {
    console.log("I've been clicked!");

    var userEntry = prompt("Please enter your initials (max 3 char.)");

    var response;
    if (userEntry.length == 0){
        response = "Ouch!";
        var gameOn = false;
    } else if (userEntry.length <= 3){
        response = "Let's do this!";
        var gameOn = true;
    } else if (userEntry.length > 3) {
        response = "Why did you do that?";
        var gameOn = false;
    }
    alert(response);
    console.log(gameOn);

    function usernameEntry() {
        
    }
  });



/*

HOME
- Checks for text in card2
- Clear timer
- Wait for click
- Store username

GAME ON
- Start timer
    set timer to 1000
    25 time loss per second
    correct answer gains defined time, 100 + different number per question for more randomized score
    wrong answer lose 25 time
    time = score
- Questions, change text:
    id = qNumber to question number
    id = qQuestion to the question
    id = screen to answers, clickable
    Clear card-footer / "btn" (#generate) and show "CORRECT" or "NOPE"
        choose from answerIs.items[0-2]
- Game ends when timer <= 0 or all questions answered

GAME OFF
- Score is final time
- Alert score
- Add username and score to scoreBoard
- 

*/

/*

FUNCTIONS

function scoreBoard (username, score) {
    idk
    
}

*/