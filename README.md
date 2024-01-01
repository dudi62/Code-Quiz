# JavaScript Quiz Application

This application is a timed quiz with multiple-choice questions. The quiz questions are randomized each time the quiz is started.

## Code Overview

The provided code excerpt is from the `logic.js` file, which handles the main logic of the quiz.

1. A countdown function is defined to handle the quiz timer.

2. The `quizQuestions` array is randomized using the `sort` method with a function that returns a random number between -0.5 and 0.5.

3. The `qDisplay` function is defined to display the questions. It takes an index as a parameter, which is used to access the current question from the `quizQuestions` array. The function displays the question title and creates a button for each choice. Each button is appended to the "choices" container and an event listener is added to it.

4. The event listener checks if the selected answer is correct. If it is, it increments the user's score, plays a correct answer audio, shows feedback, and loads the next question. If the answer is incorrect, it decrements the time (if the remaining time is greater than or equal to 10 seconds), plays a wrong answer audio, shows feedback, and loads the next question.

## Usage

To start the quiz, simply open the `index.html` file in your web browser and click the "Start Quiz" button. Answer the questions as they appear. Your final score will be the number of correct answers. If you answer incorrectly, time will be deducted from the timer.

After the quiz ends, you can enter your initials to save your score. The high scores page will display all saved scores, and you can clear the scores if you wish.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.