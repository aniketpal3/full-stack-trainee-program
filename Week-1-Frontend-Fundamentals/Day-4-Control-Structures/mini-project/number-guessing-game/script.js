// Random Number
let secretNumber =
  Math.floor(Math.random() * 10) + 1;

// Attempts
let attempts = 0;

const maxAttempts = 5;


// Function: Check Guess

function checkGuess() {

  let guess =
    Number(
      document.getElementById("guessInput").value
    );

  let message =
    document.getElementById("message");

  let attemptsText =
    document.getElementById("attempts");

  if (
    guess < 1 ||
    guess > 10 ||
    isNaN(guess)
  ) {
    message.innerHTML =
      "Enter a valid number between 1 and 10";

    return;
  }

  attempts++;

  if (guess === secretNumber) {

    message.innerHTML =
      "🎉 Correct! You Win";

    attemptsText.innerHTML =
      `Attempts Used: ${attempts}`;

    document.getElementById(
      "guessInput"
    ).disabled = true;

  }

  else if (attempts >= maxAttempts) {

    message.innerHTML =
      `❌ Game Over! Number was ${secretNumber}`;

    attemptsText.innerHTML =
      "No Attempts Left";

    document.getElementById(
      "guessInput"
    ).disabled = true;

  }

  else if (guess > secretNumber) {

    message.innerHTML =
      "📈 Too High";

    attemptsText.innerHTML =
      `Attempts Left: ${maxAttempts - attempts}`;

  }

  else {

    message.innerHTML =
      "📉 Too Low";

    attemptsText.innerHTML =
      `Attempts Left: ${maxAttempts - attempts}`;
  }

  document.getElementById(
    "guessInput"
  ).value = "";
}


// Reset Game

function resetGame() {

  secretNumber =
    Math.floor(Math.random() * 10) + 1;

  attempts = 0;

  document.getElementById(
    "guessInput"
  ).disabled = false;

  document.getElementById(
    "guessInput"
  ).value = "";

  document.getElementById(
    "message"
  ).innerHTML = "";

  document.getElementById(
    "attempts"
  ).innerHTML = "";
}