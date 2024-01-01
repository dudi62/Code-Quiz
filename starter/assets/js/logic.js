// Initialize user score to 0
var userScore = 0;

// Create audio elements for correct and wrong answers
var correctAudio = document.createElement("audio");
correctAudio.setAttribute('src', 'assets/sfx/correct.wav');
var wrongAudio = document.createElement("audio")
wrongAudio.setAttribute('src', 'assets/sfx/incorrect.wav');

// Set initial countdown time to 90 seconds
var time = 90;

// Function to handle countdown
function countDown() {
    let timer = setInterval(function() {
        time--;
        // Update time display
        document.getElementById("time").innerHTML = time;
        if(time <= 0) {
            // If time runs out, show end screen
            time = 0;
            showEndScreen();
            clearInterval(timer);
        } else {
            return time;
        }
    }, 1000);
};

// Initialize question index
var index = 0;

// Randomize the order of quiz questions
quizQuestions.sort(() => Math.random() - 0.5);

// Function to display questions
function qDisplay(index) {
    // Display question title
    document.getElementById("question-title").innerHTML = quizQuestions[index].question;

    // Loop through each choice for the current question
    for (let i = 0; i < quizQuestions[index].choices.length; i++) {
        // Create a button for each choice
        let buttons = document.createElement('button');
        buttons.innerText = (i+1) + '. ' + quizQuestions[index].choices[i];
        // Append the button to the choices container
        document.getElementById("choices").appendChild(buttons); 

        // Add event listener to each button
        buttons.addEventListener('click', function(e) {
            // Check if the selected answer is correct
            if (e.target.innerText === (i+1) + '. ' + quizQuestions[index].correctAnswer) {
                // If correct, increment user score, play correct audio, show feedback, and load next question
                userScore++;
                correctAudio.play();
                showFeedback('right');
                nextQestion(index);
            } else {
                // If incorrect, decrement time, play wrong audio, show feedback, and load next question
                if(time >= 10) {
                    time = time - 10;
                } else {
                    time = 0
                };
                wrongAudio.play();
                showFeedback('wrong');
                nextQestion(index);
            };
        });
    };
};

// Get feedback element
var feedback = document.getElementById('feedback');

// Function to show feedback after user answers a question
function showFeedback(str) {
    var msg = document.createElement('p');
    if (str === 'right') {
        msg.innerText = 'Correct!';
    } else if (str === 'wrong') {
        msg.innerText = 'Wrong!';
    } else {
        return;
    };
    // Append feedback message and show feedback
    feedback.appendChild(msg);
    feedback.className = 'feedback';
};

// Function to load the next question or end the quiz if all questions have been answered or time has run out
function nextQestion(index) {
    if (time > 0 && index < quizQuestions.length - 1) {
        index++;
        document.getElementById("choices").innerHTML = '';
        qDisplay(index);
    } else {
        time = 1;
        showEndScreen();
    };
    // Clear feedback after 1 second
    setTimeout(function(){ feedback.innerHTML = ""; }, 1000);
};

// Function to show end screen
function showEndScreen() {
    // Hide questions and choices
    document.getElementById("questions").className = "hide";
    document.getElementById("choices").className = "hide";

    // Show end screen and final score
    document.getElementById("end-screen").className = "";
    document.getElementById("final-score").innerHTML = userScore;
};

// Add event listener to start button to start the quiz
document.getElementById('start').addEventListener("click", function(){
    countDown(time);
    qDisplay(index);
    document.getElementById("start-screen").className ="hide";
    document.getElementById("questions").className ="";
});

// Add event listener to submit button to save user initials and score, then redirect to highscores page
var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', function() {
    var initials = document.getElementById("initials").value;
    localStorage.setItem(initials, userScore);
    window.location.href = 'highscores.html';
    printScores();
});