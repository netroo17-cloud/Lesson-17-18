const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
// Load the click sound
const clickSound = new Audio('Music/click.mp3');

// Add click sound to all buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0; // Reset to start for rapid clicks
    clickSound.play();
  });
});

});
