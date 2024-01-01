describe('qDisplay', () => {
  beforeEach(() => {
    // Set up the necessary HTML elements for testing
    document.body.innerHTML = `
      <div id="question-title"></div>
      <div id="choices"></div>
    `;
  });

  afterEach(() => {
    // Clean up the HTML elements after each test
    document.body.innerHTML = '';
  });

  it('should display the question and choices', () => {
    // Mock data
    const quizQuestions = [
      {
        question: 'What is the capital of France?',
        choices: ['London', 'Paris', 'Berlin'],
        correctAnswer: 'Paris'
      }
    ];

    // Call the function
    qDisplay(0);

    // Check if the question and choices are displayed correctly
    expect(document.getElementById('question-title').innerHTML).toBe('What is the capital of France?');
    expect(document.getElementById('choices').children.length).toBe(3);
    expect(document.getElementById('choices').children[0].innerText).toBe('1. London');
    expect(document.getElementById('choices').children[1].innerText).toBe('2. Paris');
    expect(document.getElementById('choices').children[2].innerText).toBe('3. Berlin');
  });

  // Add more test cases as needed
});