const sounds = ["sand", "water", "wood", "metal"];
let currentAnswer = "";
let score = 0;

function playFootstep() {
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  currentAnswer = randomSound;

  const audio = new Audio(`sounds/${randomSound}.mp3`);
  audio.play();

  document.getElementById("feedback").textContent = "🤫 Listening...";
}

function checkAnswer(guess) {
  const feedback = document.getElementById("feedback");
  if (guess === currentAnswer) {
    feedback.textContent = `✅ Correct! It was ${currentAnswer}!`;
    score++;
  } else {
    feedback.textContent = `❌ Nope! It was ${currentAnswer}.`;
  }
  document.getElementById("score").textContent = `Score: ${score}`;
}
