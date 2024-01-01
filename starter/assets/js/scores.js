// Get the 'highscores' element from the DOM.
var highscores = document.getElementById('highscores');

// Define a function to print scores.
function printScores() {

    // Get all keys from the local storage.
    var keys = Object.keys(localStorage);

    // Sort the keys in descending order based on their associated values in local storage.
    keys.sort(function (a, b) {
        return localStorage[b] - localStorage[a];
    });

    // Iterate over each key.
    for (var i = 0; i < keys.length; i++) {
        // Create a new list item for each key.
        var scoreRecords = document.createElement('li');
        
        // Set the inner HTML of the list item to the key and its associated value from local storage.
        scoreRecords.innerHTML = keys[i] + ' - ' + localStorage[keys[i]];
        // Append the list item to the 'highscores' element.
        highscores.appendChild(scoreRecords);
    };
};

// Call the printScores function to display the scores when the page loads.
printScores();

// Get the 'clear' button from the DOM.
var clearBtn = document.getElementById('clear')

// Add an event listener to the 'clear' button.
clearBtn.addEventListener('click', function() {
    // Clear the local storage when the button is clicked.
    localStorage.clear();
    // Remove all scores from the page.
    highscores.innerHTML = "";
}); 