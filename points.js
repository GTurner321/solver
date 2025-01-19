// Add a score variable and initialize it
let score = 0;

// Function to update the score on the webpage
function updateScore(newScore) {
  score = newScore;
  document.getElementById('score-display').innerText = `Score = ${score}`;
}

// Update the existing code to call `updateScore` when rows are correctly filled
function checkFirstRow() {
  if (correctlyFilledFirstRow) { // Replace with actual condition for checking correctness
    updateScore(5); // Update score when the first row is correct
  }
}

function checkSecondRow() {
  if (correctlyFilledSecondRow) { // Replace with actual condition for checking correctness
    updateScore(10); // Update score when the second row is correct
  }
}

// Call these functions wherever the correctness of the rows is being evaluated

