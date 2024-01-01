// `quizQuestions` is an array of objects, where each object represents a quiz question.
// Each object has three properties:
// - `question`: a string that contains the text of the question.
// - `choices`: an array of strings that contains the possible answers to the question.
// - `correctAnswer`: a string that contains the correct answer to the question.
const quizQuestions = [
    {
      question: "Which HTML tag is used to define a hyperlink?",
      choices: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      choices: ["color", "font-color", "text-color", "none of the above"],
      correctAnswer: "color"
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: ["function myFunction()", "myFunction function()", "function:myFunction()", "myFunction():function"],
      correctAnswer: "function myFunction()"
    },
    {
      question: "What is the correct HTML for referring to an external style sheet?",
      choices: ["<stylesheet>mystyle.css</stylesheet>", "<style src='mystyle.css'>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<style href='mystyle.css'>"],
      correctAnswer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "The <footer> section"],
      correctAnswer: "Both the <head> section and the <body> section are correct"
    },
    {
      question: "What does CSS stand for?",
      choices: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      choices: ["font", "class", "styles", "style"],
      correctAnswer: "style"
    },
    {
      question: "Which is not a JavaScript Framework?",
      choices: ["Python Script", "JQuery", "Django", "NodeJS"],
      correctAnswer: "Django"
    },
    {
      question: "Which is used for Connect To Database?",
      choices: ["PHP", "HTML", "JS", "All"],
      correctAnswer: "PHP"
    },
    {
      question: "Web pages starts with which of the following tag?",
      choices: ["<Body>", "<Title>", "<HTML>", "<Form>"],
      correctAnswer: "<HTML>"
    }
  ];